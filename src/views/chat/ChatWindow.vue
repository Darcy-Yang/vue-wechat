<template>
  <div class="chat-window">
     <div class="top-nav">
      <router-link to="chat">< 微信</router-link>
      <span>{{ info.name }}</span>
      <span class="info-icon">icon</span>
    </div> 
     <div class="chat-container" v-for="item in messages">
      <li>
        <span class="message">{{ item }}</span>
      </li>
    </div> 
    <div class="bottom">
      <input type="text" v-model='val' @change="send(val)"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'chatWindow',
  data () {
    return {
      val: '',
      messages: [],
      info: []
    }
  },
  sockets: {
    message (val) {
      this.messages.push(val)
    }
  },
  created () {
    this.info = this.$route.params
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
  .chat-container {
    display: flex;
    justify-content: flex-end;
    margin: 20% 4%;
    word-wrap: wrap;
    li {
      list-style: none;
    }
    .message {
      padding: 4px;
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
