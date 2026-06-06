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

        try {

            const response = await fetch('http://localhost:5000/analyze', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    jobDescription: jobDescription,
                    fileName: resumeFile?.name || "No File"
                })
            });

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