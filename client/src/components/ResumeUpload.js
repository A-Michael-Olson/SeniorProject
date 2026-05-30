function ResumeUpload() {
    return (
        <div className="card">
            <h2>Upload Resume</h2>

            <input
                type="file"
                accept=".pdf,.doc,.docx"
            />
        </div>
    );
}

export default ResumeUpload;