const express = require('express')
const axios = require('axios')

const router = express.Router()
router.get(`/plotgenerate`, async (req, res) => {
    console.log("Data is succesfully fetched...");
    try {
        const response = await axios.get("https://data.cityofnewyork.us/resource/bqiq-cu78.json")
        res.status(200).json(response.data)
    } catch (error) {
        res.status(500).json("service unavalable")

    }
})

module.exports = router