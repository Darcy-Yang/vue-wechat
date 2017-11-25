var sqlMap = {
  user: {
    add: 'insert into user(name, avatar) values (?,?)',
    get: 'select * from user order by name ASC',
    updateId: 'update user set socket_id = ? where name = ?',
    max: 'select max(id) from user',
    current: 'insert into login(name) values (?)',
    me: 'select * from user where socket_id = ?',
    getCurrent: 'select * from user where name = ?'
  },
  message: {
    add: 'update message set content=CONCAT_WS(",",content,?) where sender = ? and name = ?',
    get: 'select * from message where sender = ?',
    display: 'update message set display_content = ? where sender = ? and name = ?'
  }
}

module.exports = sqlMap
