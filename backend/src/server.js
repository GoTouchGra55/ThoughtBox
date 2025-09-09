require("dotenv").config();
const express = require("express");
const notesRouter = require("./routes/Routes");
const connectDB = require("./config/db");
const rateLimiter = require("./middleware/rateLimiter");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRouter);

connectDB().then(() => {
  app.listen(PORT, (err) => {
    if (err) throw new Error(err);
    console.log(`Server running on port: ${PORT}`);
  });
});
