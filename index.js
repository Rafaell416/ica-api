'use strict'

const http = require('http')
const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const PORT = process.env.PORT || 5000
const app = express()

const schema = require('./src/Schema')
const config = require('./config')
const DB_URL = process.env.DB_URL || config.DB_URL
const db = require('./src/db')(DB_URL)
//const utilities = require('./src/Resolvers/utilities')()
//const context = utilities.context

const server = new ApolloServer({
  schema,
  //context,
  formatError: error => {
    console.log(error)
    return new Error('Internal server error')
  },
})

server.applyMiddleware({ app })

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
})
