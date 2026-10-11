RESUME-JOB MATCHING BACKEND (LOCAL DEVELOPMENT)

IMPORTANT
- This folder is separate from your existing React frontend. Do not replace your frontend.
- This starter backend currently includes health, registration, and login endpoints.
- Resume upload, job posting, matching, skill-gap analysis, recruiter features, and frontend API integration still need to be implemented.
- This starter is for local development only, not production deployment.

SETUP ON WINDOWS
1. Extract this ZIP.
2. Copy the extracted "backend" folder into your existing "DSA PROJECT" folder, beside src and package.json.
3. Open a VS Code terminal and run:
   cd /d "D:\DSA PROJECT\backend"
   python --version
4. Create and activate a virtual environment:
   python -m venv venv
   venv\Scripts\activate
5. Install packages:
   python -m pip install -r requirements.txt
6. In MySQL Workbench, open schema.sql and execute the entire script.
7. Copy .env.example to a new file named .env in this backend folder.
8. Edit .env and replace the DB_PASSWORD value with your local MySQL password.
9. Start the server:
   python app.py
10. Open http://127.0.0.1:5000/api/health in your browser.
   Expected response: {"success": true, "message": "Resume-Job Matching backend is running!"}

API ENDPOINTS INCLUDED
GET  /api/health
POST /api/register  JSON: {"name":"Test Student","email":"test@example.com","password":"TestPass123!","role":"job_seeker"}
POST /api/login     JSON: {"email":"test@example.com","password":"TestPass123!"}

Registration and login require MySQL to be running and schema.sql to have been executed.
Never share your .env file or commit it to GitHub.
