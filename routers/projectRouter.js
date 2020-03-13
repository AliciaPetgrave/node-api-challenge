const express = require('express')

const Projects = require('../data/helpers/projectModel')

const router = express.Router()

//REQUESTS

//GET request good
router.get('/', (req, res) => {
    Projects.get()
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => {
        res.status(500).json({message: 'the project could not be received'})
    })
})

//GET request for project actions good
router.get('/:id', validateId, (req, res) => {
    Projects.getProjectActions(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error => {
        res.status(500).json({message: 'the information could not be received'})
    })
})

//POST request good
router.post('/', (req, res) => {
    Projects.insert(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: 'Error adding the project',});
    });
  });

//DELETE request good
router.delete('/:id', validateId, (req, res) => {
    Projects.remove(req.params.id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: 'Error adding the project',});
    });
  });

//PUT request good
router.put('/:id', validateId, (req, res) => {
    Projects.update(req.params.id, req.body)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: 'Error adding the project',});
    });
  });


//custom middleware
function validateId(req, res, next) {
    Projects.get(req.params.id)
    .then(id => {
      if (id){
        req.projects = id
        next()
      } else {
        res.status(400).json({message: "missing id data"})
      }
    })
  }

module.exports = router