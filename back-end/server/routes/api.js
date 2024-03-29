const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const User = require('../models/user');
const jwt = require('jsonwebtoken')
const db = "mongodb+srv://twylis-user:twylis-password@twylis.90iaw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const db = "mongodb+srv://twylis-user:<password>@twylis.90iaw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// // mongoose.Promise = global.Promise;

router.get('/', (req, res) => {
    res.send('From API route')
})
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }, function(err) {
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')      
    }
});

function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

router.get('/account', verifyToken, (req, res) => {
  let payload = {subject: user._id}
  let token = jwt.sign(payload, 'secretKey')
  res.status(200).send({token})
  // let specialEvents = [
  //   {
  //     "_id": "1",
  //     "name": "Auto Expo Special",
  //     "description": "lorem ipsum",
  //     "date": "2012-04-23T18:25:43.511Z"
  //   },
  // ]
  // res.json(specialEvents)
})

router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err)      
    } else {
      let payload = {subject: registeredUser._id}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})
    }
  })
})

router.post('/login', (req, res) => {
  let userData = req.body
  User.findOne({email: userData.email}, (err, user) => {
    if (err) {
      console.log(err)    
    } else {
      if (!user) {
        res.status(401).send('Invalid Email')
      } else 
      if ( user.password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        let payload = {subject: user._id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      }
    }
  })
})

module.exports = router;