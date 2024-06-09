const express = require("express");
const User = require('../models/User');
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Middleware to parse JSON bodies
router.use(express.json());

router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 characters').isLength({ min: 5 }),
],async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
   let user = await User.findOne({email : req.body.email})
  
   if(user){
    return res.status(400).json({error: "sorry a user with this email already exists"})
   }
   user = await User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
   })
  //.then(user => res.json(user)).catch(err => {
    //     console.log(err);
    //     return res.status(500).json({ error: 'Internal Server Error' , message : err.message});
    // });
    res.json({"Nice" : "nice"})
});

module.exports = router;
