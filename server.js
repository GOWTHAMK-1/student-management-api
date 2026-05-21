const express = require("express");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();


app.use(express.json());
app.use(logger);


app.use("/students", studentRoutes);


app.get("/", (req, res) => {
    res.send("Student Management REST API is Running...");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});