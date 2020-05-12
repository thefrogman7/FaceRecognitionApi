const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/Register');
const signin = require('./controllers/Signin');
const profile = require('./controllers/Profile');
const image = require('./controllers/Image');

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '1234',
    database : 'facerecognition'
  }
 });
 

const app = express();

    app.use(cors())
    app.use(bodyParser.json());
    app.get('/', (req, res)=> 
    {
      res.send(database.users);
  })

app.post('/signin', (req, res)=>{signin.handlesignin(req,res,db,bcrypt)})

app.post('/register',(req , res)=>{register.handleRegister(req, res, db,bcrypt)})

app.get('/profile/:id',(res,req)=>{profile.handleprofileGet(res,req,db)})

app.put('/image',(req,res)=>{image.handleimage(req,res,db)})

app.post('/imageurl',(req,res)=>{image.handleApiCall(req,res)})





app.listen(3000, ()=> {
  console.log('app is running on port 3000');
})
