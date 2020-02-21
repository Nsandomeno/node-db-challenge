// import express
const express = require('express')
// import model
const Projects = require('./project-model.js')
// create router
const router = express.Router()
// begin endpoints
router.get('/', (req, res) => {
    Projects.getProjects()
        .then((projects) => {
            res.status(200).json(projects)
        })
        .catch((error) => {
            res.status(500).json({ message:"The promise could not be resolved." })
        })
})

// export to server
module.exports = router