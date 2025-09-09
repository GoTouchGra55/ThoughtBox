const express = require("express");
const router = express.Router();
const {
  getAllNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");

router.route("/").get(getAllNotes).post(createNote);

router.route("/:id").get(getNote).put(updateNote).delete(deleteNote);

module.exports = router;
