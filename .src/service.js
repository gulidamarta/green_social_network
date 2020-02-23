const express = require('express')
const path = require('path')

const publicPath = path.join(__dirname, '../public')

//Set up the custom environment
const port = process.env.PORT || 4200

//instance - get results of express function
const app = express()

//folder public now is static
app.use(express.static(publicPath))


app.listen(port, ()=>{
    console.log(`Server has been started on port ${port}...`)
})
