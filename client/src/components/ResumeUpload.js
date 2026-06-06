function ResumeUpload({ setResumeFile }) {

    const handleFileChange = (event) => {
        setResumeFile(event.target.files[0]);
    };

    return (
        <div className="card">

            <h2>Upload Resume</h2>

            <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
            />

        </div>
    );
}

export default ResumeUpload;