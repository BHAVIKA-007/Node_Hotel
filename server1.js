//import express module and create an spplication
//app can be named something else also but common practice isapp
const express=require('express');
const app=express();//we use app to store the function named express then is inbuilt in express module
const db=require('./db');
const Person=require('./models/person');
//api is like menucard
//endpoints are like indiiviual items on menu
//we have various methods of getting the item fromserver 
//get method is read only . we only get data,we cant moidfy/delete/add data
//defining a route
app.get('/',(req,res)=>{
    //req and res are objects
   //Contains details about the incoming request (e.g., URL, headers, body)
   //Used to set the details of the outgoing response that is sent to client(e.g., status code, headers, body)
    res.send("Heemloooo")// Send a response body
})
//inside get we pass path and callback function
app.get('/pizza',(req,res)=>{
res.send("pizza is ready")

})

//app.listen(3000);the port number,localhost is like building name and port number like room number
//we pass port number and callback functiom in listen
app.listen(3000, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 3000);
})

