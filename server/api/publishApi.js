var models = require('../db')
var express = require('express')
var multer = require('multer')
var router = express.Router()
var mysql = require('mysql')
var $sql = require('../sql')

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

  // 上传头像；
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../static/publish/')
  },
  filename: function (req, file, cb) {
    var maxSql = $sql.publish.max
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
router.post('/uploadPictures', upload.single('pictures'), (req, res) => {})

  // 查找id最大值接口；
router.get('/getMaxId', (req, res) => {
  var maxSql = $sql.publish.max
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

  // 添加朋友圈文章接口；
router.post('/addPublish', (req, res) => {
  var sql = $sql.publish.add
  var params = req.body
  conn.query(sql, [params.author, params.avatar, params.content, params.pictures, params.date, params.location], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
module.exports = router
