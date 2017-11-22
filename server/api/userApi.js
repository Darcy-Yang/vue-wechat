var models = require('../db')
var express = require('express')
// var multer = require('multer')
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

module.exports = router
