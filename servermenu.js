const express = require('express')
const router = express.Router();
const menuItem = require('./models/menu')

router.post('/', async (req, res) => {
    try {
        const item = req.body
        const dish = new menuItem(item)
        const response = await dish.save()
        res.status(200).json(response)
    }
    catch (err) {
        console.log("Error:", err);
        res.status(500).json({error: "internal server error"});
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await menuItem.find();
        console.log("data fetched");
        res.status(200).json(data);
    }
    catch (err) {
        console.log("Error:", err);
        res.status(500).json({error: "internal server error"});
    }
})

module.exports = router;