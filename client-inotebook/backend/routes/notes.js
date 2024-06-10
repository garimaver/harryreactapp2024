const express = require("express");
const router = express.Router();
const fetchuser = require("../middlewares/fetchuser");
const validateObjectId = require("../middlewares/validateObjectId");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

router.post('/addnotes', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be at least 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    const { title, description, tag } = req.body;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const note = new Note({
            title, description, tag, user: req.user.id
        });
        const savedNote = await note.save();
        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

router.put('/updatenotes/:id', fetchuser, validateObjectId, async (req, res) => {
    const { title, description, tag } = req.body;

    // Create a newNote object
    const newNote = {};
    if (title) { newNote.title = title; }
    if (description) { newNote.description = description; }
    if (tag) { newNote.tag = tag; }

    try {
        // Find the note to be updated and update it
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not found"); }

        // Allow update only if user owns this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

router.delete('/deletenotes/:id', fetchuser, validateObjectId, async (req, res) => {
    const { title, description, tag } = req.body;

    

    try {
        // Find the note to be updated and update it
        let note = await Note.findById(req.params.id);
        if (!note) { return res.status(404).send("Not found"); }

        // Allow update only if user owns this note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ "success " : "note has been deleted" , note : note});
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

module.exports = router;
