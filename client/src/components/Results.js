function Results({ results }) {

    if (!results) {
        return null;
    }

    return (
        <div className="card">

            <h2>Extracted Resume Text</h2>

            <p>
                <strong>File:</strong>
                {" "}
                {results.fileName}
            </p>

            <hr />

            <pre
                style={{
                    whiteSpace: "pre-wrap",
                    textAlign: "left"
                }}
            >
                {results.extractedText}
            </pre>

        </div>
    );
}

export default Results;