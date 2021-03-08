// build your `/api/projects` router here
const express = require("express")
const projects = require("./model")
const router = express.Router()

router.get("/", async (req, res, next) => {
    try{
        const proj = await projects.getProjects()
        res.status(200).json(proj)
    } catch(err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const proj = await projects.newProject(req.body)
        res.status(201).json(proj)

    } catch (err) {
        next(err)
    }
})

module.exports = router