// build your `Task` model here
const db = require("../../data/dbConfig")

async function findTask(id) {
    return await db("tasks")
        .where("task_id", id)
}

//getTasks

async function getTasks() {
    
    return await db("Tasks")
        .select("*")
        
}

//addTask

async function addTask(task) {

    const [taskId] = await db("Tasks")
        .insert(task)

    if (!taskId) {
        return Promise.resolve(null)
    }

    const [newProj] = await findTask(taskId)

    return Promise.resolve(newProj)
}

module.exports = {
    findTask,
    getTasks,
    addTask
}