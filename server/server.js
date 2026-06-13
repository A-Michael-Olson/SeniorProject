const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const mammoth = require("mammoth"); // For .docx files
const pdf = require("pdf-parse"); // For .pdf files
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.post("/analyze", upload.single("resume"), async (req, res) => {

    try {

    const extension = path
        .extname(req.file.originalname)
        .toLowerCase();

    let extractedText = "";

    if (extension === ".docx") {

        const result =
            await mammoth.extractRawText({
                path: req.file.path
            });

        extractedText = result.value;

    }
    else if (extension === ".pdf") {

        const dataBuffer =
            fs.readFileSync(req.file.path);

        const pdfData =
            await pdf(dataBuffer);

        extractedText = pdfData.text;

    }
    else {

        return res.status(400).json({
            error:
                "Unsupported file type."
        });

    }

    fs.unlinkSync(req.file.path); // Delete the uploaded file after processing
    res.json({
        fileName: req.file.originalname,
        extractedText: extractedText
    });

    }
    catch (error) {

        console.error(error);

        res.status(500).json({
            error:
                "Failed to process file."
        });

    }

});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});