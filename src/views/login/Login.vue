<template>
  <div class="login-main">
    <span>登录</span>
    <input type="text" placeholder="请输入昵称" v-model="username"/>
    <input type="file" accept="image/*" @change="uploadAvatar"/>
    <label>上传头像</label>
    <button @click="login">登录</button>
  </div>
</template>

<script>
import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      maxId: 0,
      menus: [],
      repeat: false
    }
  },
  created () {
    this.$http.get('/api/user/getMaxId').then((response) => {
      this.maxId = response.body
    })
    this.$http.get('/api/user/allUser').then((response) => {
        this.menus = response.body
      })
  },
  methods: {
    uploadAvatar (e) {
      const avatar = e.target.files[0]
      const xhr = new XMLHttpRequest()
      let fd = new FormData()
      fd.append('avatar', avatar)
      xhr.open('post', '/api/user/uploadAvatar')
      xhr.onload = function () {
        console.log(xhr.status)
      }
      xhr.send(fd)
    },
    login () {
      for (let i = 0; i < this.menus.length; i++) {
        if (this.username === this.menus[i].name) {
          this.repeat = true
          break;
        }
      }
      if (!this.repeat) {
        this.$http.post('/api/user/addUser', {
          name: this.username,
          avatar: `static/avatar/${this.maxId}.jpg`
        }, {}).then((response) => {})
        this.$router.push('/contact')
      } else {
        alert('该用户名已存在！')
        this.username = ''
        this.repeat = false
      }
    
    }
  }
}
</script>

<style lang="less" scoped>
.login-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: -8px;
  background: #ebebeb;
  span {
    margin-top: 30%;
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 4px;
  }
  input {
    margin-top: 6%;
    width: 48%;
    padding: 2%;
    border-radius: 6px;
    border: none;
  }
  button {
    margin-top: 8%;
    margin-bottom: 100%;
    width: 60%;
    padding: 2%;
    border-radius: 6px;
    border: none;
    font-size: 16px;
    color: white;
    background: #38bd17;
  }
}
</style>
