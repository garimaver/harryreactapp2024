const express = require("express");
const router = express.Router();

router.get('/' ,(req, res) => {
    obj = {
        a : 'thios',
        number : 56
    }
    res.json(obj.a)
})

module.exports = router