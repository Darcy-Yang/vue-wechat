<template>
  <div class="chat-window">
     <div class="top-nav">
      <router-link to="chat">< 微信</router-link>
      <span>{{ info.name }}</span>
      <span class="info-icon">icon</span>
    </div> 
    <div class="tips" v-if="tip">
      <span>{{ tip }}</span>
    </div>
    <div class="chat-container" v-for="item in messages">
      <li>
        <div class="right" v-if="item[0] === info.name">
          <span class="friend-message">{{ item[1] }}</span>
        </div>
        <div class="left" v-if="item[0] === currentUser.name">
          <span class="message">{{ item[1] }}</span>
        </div>
      </li>
    </div>
    <div class="bottom">
      <input type="text" v-model='val' @change="send(val)"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)

export default {
  name: 'chatWindow',
  data () {
    return {
      val: '',
      messages: [
        [ 'daniel', '在吗' ],
        [ 'joey', '干嘛' ],
        [ 'daniel', '来啊，快活啊' ],
        [ 'joey', '好的，你在哪，我马上就来' ]
      ],
      friend_msg: [],
      tip: '',
      info: [],
      currentUser: []
    }
  },
  sockets: {
    message (val) {
      this.messages.push(val)
    },
    notice (val) {
      this.tip = val
    },
    pmsg (val) {
      this.messages.push(val)
    }
  },
  created () {
    this.info = this.$route.params
    this.$http.post('/api/user/get-user', { socket_id: this.$socket.id }, {}).then((response) => {
      this.currentUser = response.body[0]
    })
  },
  methods: {
    send (val) {
      this.$socket.emit('test', this.currentUser.name, val)
      // 私聊消息；
      this.$socket.emit('private_message', this.currentUser.name, this.info.name, val)
      // 更新消息页面展示
      this.$http.post('/api/user/update-chat-page', {
        update: this.val,
        room: 1
      }, {}).then((response) => {})
      this.val = ''
    }
  }
}
</script>

<style lang="less" scoped>
.chat-window {
  margin: 0px -8px;
  margin-top: -33px;
  min-height: 610px;
  background: #ebebeb;
  .top-nav {
  display: flex;
  position: fixed;
  top: 0px;
  width: 100%;
  padding: 4% 0px;
  justify-content: space-between;
  background: #000;
  z-index: 999;
    a {
      margin: 0.5% 0px 0px 2%;
      font-size: 16px;
      font-weight: bold;
      color: white;
      text-decoration: none;
    }
    span {
      margin-right: 3%;
      color: white;
      font-size: 18px;
      font-weight: bold;
    }
    .info-icon {
      margin-right: 4%;
    }
  }
  .tips {
    margin-top: 20%;
    text-align: center;
    color: white;
    span {
      padding: 1%;
      border-radius: 6px;
      opacity: 0.6;
      background: gray;
    }
  }
  .chat-container {
    margin: 24% 4%;
    word-wrap: wrap;
    background: #ebebeb;
    li {
      list-style: none;
    }
    .right {
      display: flex;
      justify-content: flex-start;
    }
    .left {
      display: flex;
      justify-content: flex-end;
    }
    .message {
      // margin-top: 4%;
      margin-bottom: -36px;
      padding: 4px;
      background: #1deb27;
      border-radius: 6px;
    }
    .friend-message {
      // margin-top: 4%;
      margin-bottom: -36px;
      padding: 4px;
      background: white;
      border-radius: 6px;
    }
  }
  .bottom {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 4% 0px;
    position: fixed;
    bottom: 0px;
    background: #ebebeb;
    input {
      width: 60%;
      height: 26px;
      border-radius: 6px;
      border: none;
    }
  }
}
</style>
