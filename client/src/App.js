import './App.css';

import Header from './components/Header';
import ResumeUpload from './components/ResumeUpload';
import JobDescription from './components/JobDescription';
import Results from './components/Results';

function App() {
    return (
        <div className="App">

            <Header />

            <main className="container">

                <ResumeUpload />

                <JobDescription />

                <button className="analyze-btn">
                    Analyze Resume
                </button>

                <Results />

            </main>

        </div>
    );
}

export default App;