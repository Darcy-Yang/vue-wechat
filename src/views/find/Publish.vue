<template>
  <div class="publish-main">
    <div class="top">
      <router-link class="cancel" to="/circle">取消</router-link>
      <span class="send" @click="publish">发送</span>
    </div>
    <div class="content">
      <textarea type="text" v-model="content" placeholder="这一刻的想法..."/>
      <input type="file" accept="image/*" @change="uploadImg"/>
    </div>
    <div class="location">
      <span>所在位置</span>
    </div>
    <div class="authority">
      <div class="authority-one">
        <span>谁可以看</span>
      </div>
      <div class="authority-two">
        <span>提醒谁看</span>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)

export default {
  name: 'publish',
  data () {
    return {
      currentUser: [],
      content: '',
      maxId: 0
    }
  },
  created () {
    this.$http.post('/api/user/get-user', { socket_id: this.$socket.id }, {}).then((response) => {
      this.currentUser = response.body[0]
    })
    this.$http.get('/api/publish/getMaxId').then((response) => {
      this.maxId = response.body
    })
  },
  methods: {
    uploadImg (e) {
      const pictures = e.target.files[0]
      const xhr = new XMLHttpRequest()
      let fd = new FormData()
      fd.append('pictures', pictures)
      xhr.open('post', '/api/publish/uploadPictures')
      xhr.onload = function () {
        console.log(xhr.status)
      }
      xhr.send(fd)
    },
    publish () {
      var date = new Date()
      var month = date.getMonth()
      var day = date.getDate()
      var timeStamp = `${month + 1}月${day}日`
      this.$http.post('/api/publish/addPublish', {
        author: this.currentUser.name,
        avatar: this.currentUser.avatar,
        content: this.content,
        pictures: `static/publish/${this.maxId}.jpg`,
        date: timeStamp,
        location: ''
      })
    }
  }
}
</script>

<style lang="less" scoped>
.publish-main {
  margin: -8px;
  min-height: 600px;
  background: #ebebeb;
  .top {
    display: flex;
    padding: 3.1% 0px;
    width: 100%;
    position: fixed;
    top: 0px;
    justify-content: space-between;
    font-size: 18px;
    letter-spacing: 1.2px;
    background: #000;
    .cancel {
      margin-left: 4%;
      color: white;
      text-decoration: none;
    }
    .send {
      margin-right: 4%;
      color: #38bd17;
    }
  }
  .content {
    display: flex;
    margin-top: 18%;
    flex-direction: column;
    align-items: center;
    background: white;
    textarea {
      width: 88%;
      height: 100px;
      border: none;
      outline: none;
      resize: none;
    }
    input {
      margin-left: 6%;
      padding: 4% 0px;
      width: 94%;
      border-bottom: 0.1px solid gray;
    }
  }
  .location {
    padding: 4% 6%;
    letter-spacing: 1.2px;
    font-weight: bold;
    background: white;
  }
  .authority {
    display: flex;
    margin-top: 8%;
    flex-direction: column;
    letter-spacing: 1.2px;
    font-weight: bold;
    background: white;
    .authority-one {
      margin-left: 6%;
      padding: 4% 0px;
      width: 94%;
      border-bottom: 0.1px solid gray;
    }
    .authority-two {
      padding: 4% 6%;
    }
  }
}
</style>
