const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
require('dotenv').config();



// Importing functions from controller.js
const { getHTML, getSignup, signupData, getLogin, loginData, getCart, cartData, deleteCart } = require('./controller');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-ALlow-Origin", "*")
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next()
})

// enables form sharing to recieve form data
app.use(express.json());
app.options('*', cors())

app.use(cors());
app.use(express.static('client'));

app.get('/', getHTML);
app.get('/signup', getSignup);
app.post('/signup', signupData)
app.get('/login', getLogin)
app.post('/login', loginData)
app.get(`/cart`, getCart)
app.post('/cart', cartData)
app.put('/cart', deleteCart)

const port = 3000

app.listen(port, console.log(`Server running on port ${port}`))