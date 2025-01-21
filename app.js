const express = require('express');
const cors = require('cors')
const app = express();
const fruits = require("./routes/fruits")
const logger = require('./logger')

// Middleware
app.use(express.json())
app.use(cors())
app.use(logger)

const fruitRouter = require('./routes/fruits')

app.get('/', (req, res) => {
   res.send('Hello Fruity!');
})

app.use(express.json());
app.use('/fruits', fruits);

module.exports = app