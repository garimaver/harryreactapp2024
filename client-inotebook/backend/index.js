const connectToMongo = require("./db");
const express = require('express')
const app = express()
const cors = require("cors");
const port = 4000
app.use(cors())
app.use(express.json())

connectToMongo();


//routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
