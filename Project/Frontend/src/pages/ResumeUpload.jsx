import React, { useRef, useState } from "react";

function ResumeUpload({ onBack }) {

  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {

    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const allowedExtensions = [
      ".pdf",
      ".doc",
      ".docx"
    ];

    const fileName = file.name.toLowerCase();

    const validFile = allowedExtensions.some(
      (extension) => fileName.endsWith(extension)
    );

    if (!validFile) {
      alert("Please select a PDF, DOC, or DOCX file.");
      return;
    }

    setSelectedFile(file);
    setUploaded(false);
  };

  const handleUpload = () => {

    if (!selectedFile) {
      alert("Please choose a resume first.");
      return;
    }

    setUploaded(true);

    alert("Resume uploaded successfully!");
  };

  const handleReplace = () => {

    setUploaded(false);

    fileInputRef.current.click();
  };

  const handleRemove = () => {

    setSelectedFile(null);
    setUploaded(false);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleAnalyze = () => {

    if (!uploaded) {
      alert("Please upload your resume first.");
      return;
    }

    alert("Resume is ready for analysis.");
  };

  return (
    <div className="resume-upload-page">

      <div className="resume-upload-container">

        <button
          className="back-dashboard-button"
          onClick={onBack}
        >
          🏠 Back to Dashboard
        </button>

        <div className="resume-page-icon">
          📄
        </div>

        <h1>
          Resume Upload
        </h1>

        <p className="resume-page-description">
          Upload your resume to start the job matching process.
        </p>

        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden-file-input"
          onChange={handleFileChange}
        />

        <button
          className="choose-resume-button"
          onClick={handleChooseFile}
        >
          📁 Choose Resume
        </button>

        <p className="file-format-text">
          Accepted formats: PDF, DOC, DOCX
        </p>

        {selectedFile && (
          <div className="selected-resume-box">

            <h3>
              Resume File Name
            </h3>

            <p>
              📄 {selectedFile.name}
            </p>

          </div>
        )}

        <button
          className="upload-submit-button"
          onClick={handleUpload}
          disabled={!selectedFile}
        >
          ⬆️ Upload / Submit Resume
        </button>

        {uploaded && (
          <div className="resume-success-message">
            ✅ Resume uploaded successfully!
          </div>
        )}

        {selectedFile && (
          <div className="resume-action-buttons">

            <button
              className="replace-resume-button"
              onClick={handleReplace}
            >
              🔄 Replace Resume
            </button>

            <button
              className="remove-resume-button"
              onClick={handleRemove}
            >
              🗑️ Remove Resume
            </button>

          </div>
        )}

        <button
          className="analyze-resume-button"
          onClick={handleAnalyze}
          disabled={!uploaded}
        >
          📊 Analyze Resume
        </button>

      </div>

    </div>
  );
}

export default ResumeUpload;