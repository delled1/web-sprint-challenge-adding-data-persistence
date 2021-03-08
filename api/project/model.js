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
    .insert({
        project_name: project.project_name,
        project_description: project.project_description,
        project_completed: completed(project.project_completed)
    })


    const newProj = await findProject(newProjId)

    return newProj.map(projects => { return {
        ...projects,
        project_completed: completed(projects.project_completed)
    }})
}


module.exports = {
    findProject,
    getProjects,
    newProject
}