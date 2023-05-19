const express = require('express')
const app = express()
const { sequelize } = require("./db")
require('dotenv').config()



const start = (async function ()  {
  try {
    app.get('/', (req, res) => {res.send('Welcome to taskify API')})
    await app.listen(process.env.PORT || 2222)
    console.log(`APP connected on port ${process.env.PORT}`)
  } catch (error) {
    console.log(`Cannot connect at PORT ${process.env.PORT}`)
  }
})()





console.log('hello World')