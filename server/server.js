const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
require('dotenv').config();



// Importing functions from controller.js
const { getHTML, getSignup, signupData } = require('./controller');

const app = express();

// enables form sharing to recieve form data
app.use(express.json());

app.use(cors());
app.use(express.static('client'));

app.get('/', getHTML);
app.get('/signup', getSignup);
app.post('/signup', signupData)

const port = 3000

app.listen(port, console.log(`Server running on port ${port}`))