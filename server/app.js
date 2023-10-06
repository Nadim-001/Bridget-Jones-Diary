const express = require("express");
const cors = require("cors");

const diaryRouter = require("./routers/entries");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
        title: "Bridget-Jones-Diary-App",
        description: "A Bridget Jones Themed Personal Diary App"
    })
});

// Routes
app.use("/entries", diaryRouter);

module.exports = app;
