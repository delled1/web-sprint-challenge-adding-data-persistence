// build your `Project` model here
const db = require ("../../data/dbConfig")

const completed = (num) => {

    if (num === 0){
        return false
    } if (num === 1){
        return true
    }
}

async function findProject(id) {
    
    return await db("projects").where("project_id", id)
}

//getProjects

async function getProjects() {
    
    const project = await db("projects")
        .select("*")
        return project.map(projects => { return {
            ...projects,
            project_completed: completed(projects.project_completed)
        }})
}

//newProject

async function newProject(project) {

    const [newProjId] = await db("projects")
        .insert(project)

    if (!newProjId) {
        return Promise.resolve(null)
    }

    const [newProj] = await findProject(newProjId)

    return Promise.resolve(newProj)
}


module.exports = {
    findProject,
    getProjects,
    newProject
}