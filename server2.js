//express and app,db,model,bodyparser,post,get,listen
const express=require('express');
const app=express();
const db=require('./db');
require('dotenv').config();

const bodyParser=require('body-parser');
app.use(bodyParser.json());//stored in req.body

const Personroutes=require('./Personserver')
const menuItemroutes=require('./servermenu')
app.use('/',Personroutes)
app.use('/',menuItemroutes)

const PORT=process.env.PORT||3000

app.listen(PORT, function(){
    console.log("Server listening on Port", PORT);
})