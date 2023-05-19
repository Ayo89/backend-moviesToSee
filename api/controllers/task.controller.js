const Task = require('../models/task.model')

const addTask = async (req, res) => {
  try {
   const task = await res.locals.user.createTask(req.body)
    //const task = await Task.create(req.body)
    res.status(200).json(task)
  } catch (error) {
    console.log(error)
    res.status(500).send('Cannot create task', error)
  }
}

module.exports = { addTask }