const express = require('express')
const server = express()

const projectRouter = require('./routers/projectRouter')
const actionRouter = require('./routers/actionRouter')


server.use(express.json())
server.use('/api/projects', projectRouter)
server.use('/api/actions', actionRouter)



server.use(function(req, res, next) {
    res.status(404).json({message: "page not found"})
  })

module.exports = server