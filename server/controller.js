require('dotenv').config();
const Sequelize = require('sequelize');

const path = require('path');

module.exports = {
    getHTML: (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'))
    },

    getSignup: (req, res) => {
        res.sendFile(path.join(__dirname, 'signup.html'))
    },

    signupData: (req, res) => {
        let { fullName, email, password, number } = req.body

        if(!email.password.length) {
            return res.json({'alert': 'Please enter a valid email'});
        } else if(password.value.length < 8) {
            return res.json({'alert': 'Password must be 8 or more characters'})
        } else if(number.value.length < 10) {
            return res.json({'alert': 'Please enter a valid phone number'})
        } else if(!number.value.length) {
            return res.json({'alert': 'Please enter a phone number'})
        } 
    }
}