var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)

const userApi = require('./api/userApi')
const bodyParser = require('body-parser')

var allSocket = []

io.on('connection', function (socket) {
  console.log('a user connected!')
  socket.on('login', function (username) {
    socket.broadcast.emit('notice', `${username}上线啦`)
    socket.emit('me', username)
    allSocket[username] = socket
    socket.emit('socketId', [allSocket[username].id, username])
  })
  socket.on('test', function (name, data) {
    socket.emit('message', [name, data])
  })
  socket.on('add', function (data) {
    socket.emit('addUser', data)
  })
  socket.on('private_message', function (from, to, msg) {
    var target = allSocket[to]
    if (target) {
      target.emit('pmsg', [from, msg])
    }
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
