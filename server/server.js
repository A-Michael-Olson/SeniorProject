const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.post("/analyze", (req, res) => {

    console.log(req.body);

    res.json({
        strengths: [
            "Strong technical experience",
            "Relevant project work"
        ],
        weaknesses: [
            "Missing measurable achievements"
        ],
        suggestions: [
            "Add metrics to projects",
            "Include more job-specific keywords"
        ]
    });

});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});