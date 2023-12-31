// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
const app = express()

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
});


//LISTEN
app.listen(PORT, ()=>{
console.log ('Listening on Port:', PORT)
});

//BREADS

const breadsController = require ('./controllers/breads_controllers.js')
app.use('/breads', breadsController)