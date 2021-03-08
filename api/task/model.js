// build your `Task` model here
const db = require("../../data/dbConfig")

const completed = (num) => {

    if (num === 0){
        return false
    } if (num === 1){
        return true
    }
}

async function findTask(id) {
    return await db("tasks")
        .where("task_id", id)
}



//getTasks

async function getTasks() {
    
    const tasks = await db("tasks as t")
        .join("projects as p", "p.project_id", "t.project_id")
        .select(
            "t.task_id",
            "t.task_description",
            "t.task_notes",
            "t.task_completed",
            "p.project_name",
            "p.project_description"
        )

        return tasks.map(task => { return {
            ...task,
            task_completed: completed(task.task_completed)
        }})
        
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