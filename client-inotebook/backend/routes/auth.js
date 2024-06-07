const express = require("express");
const User = require ('../models/User');
const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

router.post('/', (req, res) => {
    console.log(req.body); // Corrected to log the request body
   const user = User(req.body);
   user.save()
    res.send(req.body);
});

module.exports = router;
