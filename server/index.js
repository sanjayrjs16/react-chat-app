const express = require('express');
const socketio = require('socket.io')
const http = require('http')

const PORT = process.env.PORT || 5000;

const router = require('./router')

const app = express()
const server = http.createServer(app)
corsOptions={
    cors: true,
    origins:["http://localhost:3000"],
   }
   const io = socketio(server, corsOptions);

io.on('connection',  (socket) => {
    console.log("New connection established !");
    socket.on('disconnect', () => {
        console.log("User disconnected!  ")
    })
})
app.use(router)
server.listen(PORT, () => console.log(`Server has started on port ${PORT}`))