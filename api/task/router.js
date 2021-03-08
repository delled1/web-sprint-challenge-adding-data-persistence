// build your `/api/tasks` router here
const express = require("express")
const tasks= require("./model")
const router = express.Router()

router.get("/", async (req, res, next) => {
    try{

        const task = await tasks.getTasks()
        res.status(200).json(task)

    } catch(err) {
        next(err)
    }
})


router.post("/", async (req, res, next) => {
    try{

        const task = await tasks.addTask(req.body)
        res.status(201).json(task)

    } catch(err) {
        next(err)
    }
})

module.exports = router