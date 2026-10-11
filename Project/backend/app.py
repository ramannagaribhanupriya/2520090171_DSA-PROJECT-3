import logging
from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from db import get_db_connection

app = Flask(__name__)
CORS(app)  # Development setup; restrict origins before deployment.
logging.basicConfig(level=logging.INFO)


@app.get("/api/health")
def health():
    return jsonify({
        "success": True,
        "message": "Resume-Job Matching backend is running!"
    })


@app.post("/api/register")
def register():
    data = request.get_json(silent=True) or {}
    name = str(data.get("name", "")).strip()
    email = str(data.get("email", "")).strip().lower()
    password = data.get("password", "")
    role = data.get("role", "job_seeker")

    if not name or not email or not isinstance(password, str) or len(password) < 8:
        return jsonify({
            "success": False,
            "message": "Name, email and a password of at least 8 characters are required."
        }), 400

    if role not in ("job_seeker", "recruiter"):
        return jsonify({"success": False, "message": "Invalid user role."}), 400

    conn = cursor = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            """INSERT INTO users (name, email, password_hash, role)
               VALUES (%s, %s, %s, %s)""",
            (name, email, generate_password_hash(password), role)
        )
        conn.commit()
        return jsonify({"success": True, "message": "Registration successful."}), 201
    except Exception as error:
        if conn and conn.is_connected():
            conn.rollback()
        if getattr(error, "errno", None) == 1062:
            return jsonify({"success": False, "message": "Email is already registered."}), 409
        app.logger.exception("Registration failed")
        return jsonify({"success": False, "message": "Unable to register user. Check backend logs."}), 500
    finally:
        if cursor:
            cursor.close()
        if conn and conn.is_connected():
            conn.close()


@app.post("/api/login")
def login():
    data = request.get_json(silent=True) or {}
    email = str(data.get("email", "")).strip().lower()
    password = data.get("password", "")

    if not email or not isinstance(password, str) or not password:
        return jsonify({"success": False, "message": "Email and password are required."}), 400

    conn = cursor = None
    try:
        conn = get_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute(
            "SELECT id, name, email, password_hash, role FROM users WHERE email = %s",
            (email,)
        )
        user = cursor.fetchone()

        if not user or not check_password_hash(user["password_hash"], password):
            return jsonify({"success": False, "message": "Invalid email or password."}), 401

        return jsonify({
            "success": True,
            "message": "Login successful.",
            "user": {
                "id": user["id"],
                "name": user["name"],
                "email": user["email"],
                "role": user["role"]
            }
        })
    except Exception:
        app.logger.exception("Login failed")
        return jsonify({"success": False, "message": "Unable to log in. Check backend logs."}), 500
    finally:
        if cursor:
            cursor.close()
        if conn and conn.is_connected():
            conn.close()


if __name__ == "__main__":
    # Local development only. Do not expose the debug server publicly.
    app.run(host="127.0.0.1", port=5000, debug=True)
