function JobDescription({
    jobDescription,
    setJobDescription
}) {

    return (
        <div className="card">

            <h2>Job Description</h2>

            <textarea
                rows="10"
                value={jobDescription}
                placeholder="Paste job description here..."
                onChange={(e) =>
                    setJobDescription(e.target.value)
                }
            />

        </div>
    );
}

export default JobDescription;