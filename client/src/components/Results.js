function Results() {

    const sampleResults = {
        strengths: [
            "Strong technical skills section",
            "Relevant project experience"
        ],
        weaknesses: [
            "Missing measurable achievements"
        ],
        suggestions: [
            "Add metrics to project descriptions",
            "Include more keywords from the job posting"
        ]
    };

    return (
        <div className="card">
            <h2>Analysis Results</h2>

            <h3>Strengths</h3>
            <ul>
                {sampleResults.strengths.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h3>Weaknesses</h3>
            <ul>
                {sampleResults.weaknesses.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h3>Suggestions</h3>
            <ul>
                {sampleResults.suggestions.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default Results;