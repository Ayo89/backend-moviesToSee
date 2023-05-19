require('dotenv').config()
const express = require('express')
const app = express()
const { sequelize, connection } = require("./db")


const start = (async function ()  {
  try {
    app.get('/', (req, res) => {res.send('Welcome to taskify API')})
    await app.listen(process.env.PORT || 2222)
    await connection()
    console.log(`APP connected on port ${process.env.PORT}`)
  } catch (error) {
    throw new Error(`Cannot connect at PORT ${process.env.PORT}`, error)
  }
})()




console.log('hello World')