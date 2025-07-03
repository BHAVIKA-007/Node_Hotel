const express = require("express")
const router = express.Router();
const Person = require('./models/person');
const {jsonAuthMiddleware,generateToken}=require("./jwt")

// POST - Create a new person
router.post('/signup', async (req, res) => {
    try {
        const data = req.body
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("data saved");
        const payLoad={
            id:response.id,
            username:response.username
        }
        const token=generateToken(payLoad);
        console.log("token is",token);
        res.status(200).json({response:response,token:token});
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
})

//login route
router.post('/login',async(req,res)=>{
    try{
        const {username,password}=req.body;
        const user=await Person.findOne({username:username})
            if(!user|| !(await user.comparePassword(password)))
                return res.status(401).json({error:"invalid username or password"})
        const payLoad={
            id:user.id,
            username:user.username
        }
        const token=generateToken(payLoad);
        res.status(200).json({token:token});
    }catch(err){
            res.status(500).json({ error: "internal server error" });
    }
})

//login oage for ur details
router.get('/profile',jsonAuthMiddleware,async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        const userId=userData.id;
        const user=await Person.findById(userId)
         res.status(200).json({user});
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
})

// GET - Get all persons
router.get('/',jsonAuthMiddleware,async (req, res) => {
    try {
        const data = await Person.find();
        console.log("data fetched");
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
})

// PUT - Update a person by ID
router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // Extract the id from the URL parameter
        const updatedPersonData = req.body; // Updated data for the person
        
        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true, // Return the updated document
            runValidators: true // Run Mongoose validation
        });
        
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        
        console.log('data updated');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// DELETE - Delete a person by ID
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // Extract the person's ID from the URL parameter
        
        // Assuming you have a Person model
        const response = await Person.findByIdAndDelete(personId);
        
        if (!response) {
            return res.status(404).json({ error: 'Person not found' });
        }
        
        console.log('data deleted');
       // Instead of just { message: 'person Deleted Successfully' }
// Consider returning the deleted person data like other operations
res.status(200).json({ message: 'Person deleted successfully', data: response });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

module.exports = router;