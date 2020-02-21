// import config object as db
const db = require('../data/dbConfig.js')
// export all the functions as you build them
module.exports = {
    // helper functions:
    getProjects
}

// Begin creating methods
function getProjects() {
    return db('projects')
}