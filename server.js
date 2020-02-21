// import express
const express = require('express');
// import router

// import config object if there is an endpoint here

// create the server
const server = express()
// Global Middleware
server.use(express.json())
// introduce routes

// export
module.exports = server