// import config object as db
const db = require('../data/dbConfig.js')
// export all the functions as you build them
module.exports = {
    // helper functions:
    getProjects,
    addProject,
    getResource,
    addResource,
    getTasks,
    addTask
}

// Begin creating methods
function getProjects() {
    return db('projects')
}

function addProject(project){
    return db('projects')
        .insert(project, "id")
}

function getResource() {
    return db('resources')
}

function addResource(resource) {
    return db('resources')
            .insert(resource, "id")
}

function getTasks() {
    return db('tasks')
}

function addTask(task) {
    return db('tasks')
        .insert(task, 'id')
}