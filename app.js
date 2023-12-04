const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const enseresRoute = require("./routes/enseres");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", enseresRoute);

app.get("/", (req, res) => {
res.send("Welcome to my API");
});

mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((error) => console.error(error));

app.listen(port, () => console.log("Server listening to", port));


