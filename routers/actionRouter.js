const express = require('express')

const Actions = require('../data/helpers/actionModel')

const router = express.Router()

//REQUESTS  

//GET request good
router.get('/', (req, res) => {
    Actions.get()
    .then(action => {
        res.status(200).json(action)
    })
    .catch(error => {
        res.status(500).json({message: 'the information could not be received'})
    })
})

//GET request by id good
router.get('/:id', (req, res) => {
    Actions.get(req.params.id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(error => {
        res.status(500).json({message: 'the information could not be received'})
    })
})

//POST request good
router.post('/', (req, res) => {
    Actions.insert(req.body)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: 'Error adding the project',});
    });
  });


//DELETE request good
router.delete('/:id', (req, res) => {
    Actions.remove(req.params.id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: 'Error adding the hub',});
    });
  });



//PUT request good
router.put('/:id', (req, res) => {
    Actions.update(req.params.id, req.body)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({message: 'Error adding the hub',});
    });
  });



module.exports = router