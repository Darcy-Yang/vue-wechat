var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)

const userApi = require('./api/userApi')
const bodyParser = require('body-parser')

io.on('connection', function (socket) {
  console.log('a user connected!')
  socket.on('test', function (data) {
    socket.emit('message', data)
  })
  socket.on('add', function (data) {
    socket.emit('addUser', data)
  })
  socket.on('disconnect', function () {
    console.log('user disconnected~')
  })
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
  // 后端api路由；
app.use('/api/user', userApi)

server.listen(3000, function () {
  console.log('server listen at port: 3000')
})
