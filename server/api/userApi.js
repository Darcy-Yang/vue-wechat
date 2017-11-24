var models = require('../db')
var express = require('express')
var multer = require('multer')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sql')

  // 连接数据库；
var conn = mysql.createConnection(models.mysql)
conn.connect()
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: 1,
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

  // 添加用户接口；
router.post('/addUser', (req, res) => {
  var sql = $sql.user.add
  var params = req.body
  conn.query(sql, [params.name, params.avatar], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

  // 获取所有用户接口；
router.get('/allUser', (req, res) => {
  var getSql = $sql.user.get
  conn.query(getSql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

  // 添加消息接口；
router.post('/addMessage', (req, res) => {
  var messageSql = $sql.user.addMessage
  var params = req.body
  conn.query(messageSql, [params.message, params.name], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})

  // 上传头像；
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../static/avatar/')
  },
  filename: function (req, file, cb) {
    var maxSql = $sql.user.max
    conn.query(maxSql, function (err, rows, field) {
      if (err) {
        console.log(err)
      }
      if (rows) {
        const name = field[0].name
        var id = rows[0][name] + 1
        cb(null, `${id}.jpg`)
      }
    })
  }
})

var upload = multer({ storage: storage })

  //  上传头像接口；
router.post('/uploadAvatar', upload.single('avatar'), (req, res) => {})

  // 查找id最大值接口；
router.get('/getMaxId', (req, res) => {
  var maxSql = $sql.user.max
  conn.query(maxSql, function (err, rows, field) {
    if (err) {
      console.log(err)
    }
    if (rows) {
      const name = field[0].name
      const id = rows[0][name] + 1
      jsonWrite(res, id)
    }
  })
})

module.exports = router
