// import express
const express = require('express');
// import router
const projectRouter = require('./api/project-router.js')
// import config object if there is an endpoint here

// create the server
const server = express()
// Global Middleware
server.use(express.json())
// introduce routes
server.use('/api/projects', projectRouter)
// export
module.exports = server