const express = require('express');
const cors = require('cors');
const ruta = require('../rutas/rutadp.js')
const app = express();

app.use(cors());
app.get('/home', (req, res) => {
    res.send('Welcome to our website')
})

app.use('/home', ruta)

app.use(express.json())
module.exports = app;