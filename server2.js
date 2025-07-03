//express and app,db,model,bodyparser,post,get,listen
const express=require('express');
const app=express();
const db=require('./db');
require('dotenv').config();
const passport = require('./auth');

const bodyParser=require('body-parser');
app.use(bodyParser.json());//stored in req.body
// //middleware function
// const logRequest=((req,res,next)=>{
//     console.log(`${new Date().toLocaleString()} Requesr made to ${req.originalUrl}`);
//     next();//if we dont write next we will get time and then it wont run so the get info isnt seen
// })

// app.get('/',logRequest,(req,res)=>{
// res.send("Welcome to our hotel");
// }) we only get time when we run / get
// app.use(logRequest)//for/ or/menu or/person each time we get the time
app.use(passport.initialize());
const localAuthMiddleware=passport.authenticate('local',{session:false})
app.get('/',(req,res)=>{
res.send("Welcome to our hotel");
})
const Personroutes=require('./Personserver') 
const menuItemroutes=require('./servermenu');
const Person = require('./models/person');
app.use('/person',Personroutes)
app.use('/menu',menuItemroutes)

const PORT=process.env.PORT||3000

app.listen(PORT, function(){
    console.log("Server listening on Port", PORT);
})