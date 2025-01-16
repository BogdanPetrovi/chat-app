const { createServer } = require('http')
const { Server } = require('socket.io')
const { app } = require('./app')

const server = createServer(app)
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000'
  }
});

io.on('connection', (socket) => {
  
})

server.listen(5000, () => {
  console.log('App is up and listening on port 5000!');
})