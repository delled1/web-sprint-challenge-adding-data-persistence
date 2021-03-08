// build your `Resource` model here
const db = require("../../data/dbConfig")


async function findResource(id) {
    return await db("resources")
        .where("resource_id", id)
}

//getResources

async function getResources() {
    
    return await db("resources")
        .select("*")
        
}

//addResource

async function addResource(resource) {

    const [resourceId] = await db("resources")
        .insert(resource)

    if (!resourceId) {
        return Promise.resolve(null)
    }

    const [newProj] = await findResource(resourceId)

    return Promise.resolve(newProj)
}

module.exports = {
    findResource,
    getResources,
    addResource
}