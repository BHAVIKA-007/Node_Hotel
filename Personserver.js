const express = require("express")
const router = express.Router();
const Person = require('./models/person');

// POST - Create a new person
router.post('/person', async (req, res) => {
    try {
        const data = req.body
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log("data saved");
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
})

// GET - Get all persons
router.get('/person', async (req, res) => {
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
router.put('/person/:id', async (req, res) => {
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
router.delete('/person/:id', async (req, res) => {
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