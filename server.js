const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

//API
app.get("/",(req, res) => {
    res.status(200).json({ message : "Page is working."})
});

app.get("/home",(req, res) => {
    res.status(200).json({ message : "This is a home page."})
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});