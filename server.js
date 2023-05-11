const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

//Middleware - app.use()
app.use(express.json()); //JSON request from client to server side 
app.use("/api/contacts", require("./routes/contactRoutes")); // for routing

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});