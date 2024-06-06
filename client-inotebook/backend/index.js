const express = require("express");
const app = 
const PORT = 4001;
app.get("/", (req, res)=> {
    res.send(200)
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT} `)
})