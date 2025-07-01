const mongoose=require('mongoose');
require('dotenv').config();
const mongoURL = process.env.DB_URL;
//mydatabase is the name we want to give to database
mongoose.connect(mongoURL,{
useNewUrlParser:true,
useUnifiedTopology:true
})
const db=mongoose.connection;
//event listener
db.on('connected',()=>{
    console.log("connected to mongodb server");
})
db.on('error',()=>{
    console.log("error to mongodb server");
})
db.on('disconnected',()=>{
    console.log("disconnected to mongodb server");
})

module.exports=db;