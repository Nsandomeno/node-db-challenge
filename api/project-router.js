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
            console.log(projects)
            const newObj = projects.map((project) => {

                    if (projects.completed) {
                        project.completed = true
                    } else {
                        project.completed = false
                    }
                    return project
            })
            res.status(200).json(newObj)
        })
        .catch((error) => {
            res.status(500).json({ message:"The promise could not be resolved." })
        })
})

router.post('/', (req, res) => {
    const project = req.body
    if (!project.name) {
        res.status(400).json({ message:"Please provide a name." })
    } else {
        Projects.addProject(project)
        .then((id) => {
            res.status(201).json(id)
        })
        .catch((error) => {
            res.status(500).json({ message:"The promise could not be resolved." })
        })
    }
})

router.get('/resources', (req, res) => {
    Projects.getResource()
        .then((resources) => {
            res.status(200).json(resources)
        })
        .catch((error) => {
            res.status(500).json({ message:"The promise could not be resolved." })
        })
})

router.post('/resources', (req, res) => {
    const resource = req.body
    if(!resource.name) {
        res.status(400).json({ message:"Please provide a name." })
    } else {
        Projects.addResource(resource)
            .then((id) => {
                res.status(201).json(id)
            })
            .catch((error) => {
                res.status(500).json({message:"The promise could not be resolved."})
            })
    }
})

router.get('/tasks', (req, res) => {
    Projects.getTasks()
        .then((tasks) => {
            res.status(200).json(tasks)
        })
        .catch((error) => {
            res.status(500).json({ message:"The promise could not be resolved." })
        })
})

router.post('/tasks', (req, res) => {
    const task = req.body
    if (!task.description || !task.project_id) {
        res.status(400).json({message:"Please include a description and a project_id"})
    } else {
        Projects.addTask(task)
            .then((id) => {
                res.status(201).json(id)
            })
            .catch((error) => {
                res.status(500).json({message:"The promise could not be resolved."})
            })
    }
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    Projects.getProjectById(id)
        .then((projectDetails) => {
            res.status(200).json(projectDetails)
        })
        .catch((error) => {
            res.status(500).json({message:"The promise could not be resolved."})
        })
})

router.put('/:id', (req, res) => {
    const { id} = req.params
    const changes = req.body

    Projects.updateProject(changes, id)
        .then((num) => {
            res.status(200).json(num)
        })
        .catch((error) => {
            res.status(500).json({message:"Promise could not be resolved."})
        })
})

// export to server
module.exports = router