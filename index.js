require('dotenv').config()
const express = require('express')
const app = express()
const { sequelize, connection, sync } = require("./db")
const router = require('./api/routes')
const createRelations = require('./db/relationships')


const start = (async function () {
  try {
    app.use(express.json())
    app.use('/api', router)
    await app.listen(process.env.PORT || 2222)
    await connection()
    await sync()
    await createRelations()
    console.log(`APP connected on port ${process.env.PORT}`)
  } catch (error) {
    throw new Error(`Cannot connect at PORT ${process.env.PORT}`, error)
  }
})()




console.log('hello World')