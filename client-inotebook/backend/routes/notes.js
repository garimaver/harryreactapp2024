const express = require("express");
const router = express.Router();
const fetchuser = require("../middlewares/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes); // Send the fetched notes as a JSON response
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

router.post('/addnotes', fetchuser,[
    body('title', 'Enter a valid title').isLength({min : 3}),
    body('description', 'Description must be at least 5 characters').isLength({ min: 5 }),
] , async (req, res) => {
    const {title, description, tag} = req.body;
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors : errors.array()})
        }
     const notes = new Note({
        title, description, tag, user:req.user.id
     })
     const savedNote = await notes.save()
        res.json(savedNote); // Send the fetched notes as a JSON response
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});

module.exports = router;
