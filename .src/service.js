const express = require('express')
const socketIO = require('socket.io')
const path = require('path')
const http = require('http')

const publicPath = path.join(__dirname, '../public')

//Set up the custom environment
const port = process.env.PORT || 4200

//instance - get results of express function
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

//folder public now is static
app.use(express.static(publicPath))

io.on('connection', () => {
    console.log('IO Connection')
})

server.listen(port, ()=>{
    console.log(`Server has been started on port ${port}...`)
})
