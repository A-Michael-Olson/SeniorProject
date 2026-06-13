import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import ResumeUpload from './components/ResumeUpload';
import JobDescription from './components/JobDescription';
import Results from './components/Results';

function App() {

    const [resumeFile, setResumeFile] = useState(null);
    const [jobDescription, setJobDescription] = useState('');
    const [results, setResults] = useState(null);

const analyzeResume = async () => {

    if (!resumeFile) {
        alert("Please upload a resume.");
        return;
    }

    try {

        const formData = new FormData();

        formData.append("resume", resumeFile);
        formData.append("jobDescription", jobDescription);

        const response = await fetch(
            "http://localhost:5000/analyze",
            {
                method: "POST",
                body: formData
            }
        );

        const data = await response.json();

        setResults(data);

    } catch (error) {
        console.error(error);
    }
};

    return (
        <div className="App">

            <Header />

            <main className="container">

                <ResumeUpload
                    setResumeFile={setResumeFile}
                />

                <JobDescription
                    jobDescription={jobDescription}
                    setJobDescription={setJobDescription}
                />

                <button
                    className="analyze-btn"
                    onClick={analyzeResume}
                >
                    Analyze Resume
                </button>

                <Results
                    results={results}
                />

            </main>

        </div>
    );
}

export default App;