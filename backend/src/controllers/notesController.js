const getAllNotes = (req, res) => {
  res.status(200).send("You fetched all the notes");
};

const createNote = (req, res) => {
  res.status(200).json({ message: "Note was created" });
};

const updateNote = (req, res) => {
  res.status(200).json({ message: "Note was updated" });
};

const deleteNote = (req, res) => {
  res.status(200).json({ message: "Note was deleted" });
};

module.exports = { getAllNotes, createNote, updateNote, deleteNote };
