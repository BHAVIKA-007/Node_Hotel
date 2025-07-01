//express and app,db,model,bodyparser,post,get,listen
const express=require('express');
const app=express();
const db=require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json());//stored in req.body

const Personroutes=require('./Personserver')
const menuItemroutes=require('./servermenu')
app.use('/',Personroutes)
app.use('/',menuItemroutes)


app.listen(3000, function(){
    console.log("Server listening on Port", 3000);
})