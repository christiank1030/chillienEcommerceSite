require('dotenv').config();
const Sequelize = require('sequelize');
const path = require('path');
const bcrypt = require('bcrypt');


// firebase admin setup
const admin = require('firebase-admin');
let serviceAccount = require("../chillien-firebase-adminsdk-538i7-85a3345cb7.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore()

module.exports = {
    getHTML: (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'))
    },

    getSignup: (req, res) => {
        res.sendFile(path.join(__dirname, 'signup.html'))
    },

    signupData: (req, res) => {
        let { fullName, email, password, number, seller } = req.body
        if(!email.length) {
            return res.json({'alert': 'Please enter a valid email'});
        } else if(password.length < 8) {
            return res.json({'alert': 'Password must be 8 or more characters'})
        } else if(number.length < 10) {
            return res.json({'alert': 'Please enter a valid phone number'})
        } else if(!number.length) {
            return res.json({'alert': 'Please enter a phone number'})
        } else {
          //store user data in the database
          db.collection('users').doc(email).get()
          .then(user => {
            if(user.exists) {
                return res.json({'alert': 'Email already in use. Try signing in'})
            } else {
                //encrypt password before storing it 
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(password, salt, (err, hash) => {
                        req.body.password = hash
                        db.collection('users').doc(email).set(req.body)
                        .then(data => {
                            res.json({
                                fullName: req.body.fullName,
                                email: req.body.email,
                                seller: req.body.seller
                            })
                        })
                    })
                })
            }
          })
        }
    }
}