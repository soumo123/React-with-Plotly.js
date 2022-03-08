const { response } = require('express');
const express = require('express');
const userModel = require('../db_connection/models/user_model');
const router = express.Router()

router.post("/signup", async (req, res) => {
    try {
        const { email, password } = req.body

        console.log(email)
        if (!email || !password) {

            return res.status(422).json(`Enter all fields properly`)
        } else {


            const userData = new userModel(req.body)
            const saveUser = await userData.save()
            console.log(saveUser);
            res.status(201).json(saveUser)

        }

    } catch (error) {
        res.status(400).json('registartion failed' + error.stack)

    }
})
//signin
router.post(`/signin`, async (req, res) => {
    try {
        const { email, password } = req.body
        console.log(req.body)
        if (!email || !password) {

            res.status(422).json(`Enter all fields properly`)
        } else {

            const dbResponse = await userModel.findOne({ email, Password })

            console.log(dbResponse)
            if (dbResponse) {

                const { password, ...others } = dbResponse._doc

                res.status(200).json({ ...others, Password })
            } else {
                res.status(400).json(`invalid user`)
            }

        }

    } catch (error) {
        res.status(400).json('signin failed' + error)
    }
})

//update

router.put(`/:id`, async (req, res) => {

    try {
        const updateUser = await userModel.findByIdAndUpdate(req.params.id, {
            $set: req.body,

        }, { new: true }
        )
        res.status(200).json(updateUser)
    } catch (err) {
        res.status(500).json(err)
    }
})

//delete

router.delete(`/delete/:id`, async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id)
        res.status(200).json(`user successfully deleted`)

    } catch (err) {
        res.status(500).json(err)
    }
})

//view all
router.get(`/viewall`, async (req, res) => {

    try {
        const dbResponse = await userModel.find()
        response.status(200).json(dbResponse)


    } catch (error) {
        response.status(200).json(error)


    }
})
module.exports = router