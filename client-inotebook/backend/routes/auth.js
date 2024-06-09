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
    try {
   let user = await User.findOne({email : req.body.email})
  
   if(user){
    return res.status(400).json({error: "sorry a user with this email already exists"})
   }
   const salt = await bcrypt.gensalt(10);
   const secPass = await bcrypt.hash(req.body.password, salt);

   user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
   })
    res.json({user})
} catch (error) {
        console.error(error.message);
        res.status(500).send("Some Error occured")
}
});

module.exports = router;
