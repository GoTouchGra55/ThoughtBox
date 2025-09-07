require("dotenv").config();
const express = require("express");
const notesRouter = require("./routes/Routes");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();
app.use("/api/notes", notesRouter);

app.listen(PORT, (err) => {
  if (err) throw new Error(err);
  console.log(`Server running on port: ${PORT}`);
});