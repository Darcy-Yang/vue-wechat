<template>
  <div class="chat-window">
    <div class="top-nav">
      <router-link to="chat">< 微信</router-link>
      <span>name</span>
      <span class="info-icon">icon</span>
    </div>
     <div class="chat-container" v-for="item in messages">
      <li>
        <span class="message">{{ item }}</span>
        <div class="arrow"></div>
      </li>
    </div> 
    <div class="bottom">
      <input type="text" v-model='val' @change="send(val)"/>
    </div>
  </div>
</template>

<script>
import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'
import Vue from 'vue'

Vue.use(VueSocketio, socketio('http://localhost:3000'))

export default {
  name: 'chatWindow',
  data () {
    return {
      val: '',
      messages: []
    }
  },
  sockets: {
    connect () {
      console.log('connect~')
    },
    message (val) {
      this.messages.push(val)
    }
  },
  methods: {
    send (val) {
      this.$socket.emit('test', val)
      this.val = ''
    }
  }
}
</script>

<style lang="less" scoped>
.chat-window {
  margin: -8px;
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
      margin-left: 2%;
      font-size: 16px;
      font-weight: bold;
      color: white;
      text-decoration: none;
    }
    span {
      color: white;
      font-size: 16px;
      font-weight: bold;
    }
    .info-icon {
      margin-right: 4%;
    }
  }
  .chat-container {
    width: 40%;
    margin: -6% 0px 20% 4%;
    padding: 1% 0px;
    word-wrap: wrap;
    li {
      margin-top: 4%;
      list-style: none;
    }
    .message {
      padding: 2%;
      background: #1deb27;
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
