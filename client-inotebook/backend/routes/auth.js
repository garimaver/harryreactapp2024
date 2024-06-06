const express = require("express");
const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

router.get('/', (req, res) => {
    console.log(req.body); // Corrected to log the request body
    res.send("hi Garima");
});

module.exports = router;
