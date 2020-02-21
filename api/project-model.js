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
    addTask,
    updateProject,
    getProjectById
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

function  getProjectById(id)  {
// (1)
//     // return db('project_resources')
//     //     .where('project_resources.project_id', id)
//(2)
return db('projects').join('tasks', 'tasks.project_id', 'projects.id').join('resources', 'resources.project_id', 'tasks.project_id')
    .select('*')
    .where('projects.id', id)   
// (3) 
// const projects = db('projects').where('projects.id', id)
// const projectTasks = db('tasks').where('tasks.project_id', id)

// const projectResources = db('resources').where('resources.project_id', id)
// return {
//     id: projects.id,
//     name: projects.name,
//     description: projects.description,
//     completed: projects.completed,
//     tasks: [
//         projectTasks.map((task) => {
//             return (
//                 {
//                     id: task.id,
//                     description: task.description,
//                     notes: task.notes,
//                     completed: task.completed
//                 }
//             )
//         })
//     ],
//     resources: [
//         projectResources.map((resource) => {
//             return (
//                 {
//                     id: resource.id,
//                     name: resource.name,
//                     description: resource.description

//                 }
//             )
//         })
//     ]
// }        
}

function updateProject(changes, id) {
    return db('projects')
        .update(changes)
        .where({ id })
}