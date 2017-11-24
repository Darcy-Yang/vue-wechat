var sqlMap = {
  user: {
    add: 'insert into user(name, avatar) values (?,?)',
    get: 'select * from user order by name ASC',
    addMessage: 'update user set message = ? where name = ?',
    max: 'select max(id) from user'
  }
}

module.exports = sqlMap
