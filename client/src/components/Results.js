function Results({ results }) {

    if (!results) {
        return null;
    }

    return (
        <div className="card">

            <h2>Analysis Results</h2>

            <h3>Strengths</h3>
            <ul>
                {results.strengths.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h3>Weaknesses</h3>
            <ul>
                {results.weaknesses.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <h3>Suggestions</h3>
            <ul>
                {results.suggestions.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

        </div>
    );
}

export default Results;