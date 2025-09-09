const Note = require("../models/Note");

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // Newest first
    res.status(200).json(notes);
  } catch (err) {
    console.error("Error in getAllNotes controller method", err);

    res.status(500).json({ message: "Internal server error" });
  }
};

const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) req.status(404).json({ message: "Note not found" });
    res.status(200).json(note);
  } catch (err) {
    console.error("Error in getNote controller method", err);

    res.status(500).json({ message: "Internal server error" });
  }
};

const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });

    await newNote.save();
    res.status(201).json({ message: "Note created successfully" });
  } catch (err) {
    console.error("Error in createNote controller method", err);

    res.status(500).json(note);
  }
};

const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedNote) res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Node updated successfully" });
  } catch (err) {
    console.error("Error in updateNote controller method", err);

    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteNote = async (req, res) => {
  try {
    const deletedNode = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNode) res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (err) {
    console.error("Error in deleteNote controller method", err);

    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllNotes, getNote, createNote, updateNote, deleteNote };
