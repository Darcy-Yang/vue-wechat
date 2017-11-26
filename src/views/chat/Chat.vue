<template>
  <div class="chat-main">
    <Search class="search"/>
    <div class="list" v-for="item in send_messages" @click="chat(item)">
      <img :src="item.avatar" alt="avatar"/>
      <div class="chat-text">
        <span class="name">{{ item.name }}</span>
        <span class="content">{{ item.display_content }}</span>
      </div>
    </div>
    <Tabs class="footer"/>
  </div>
</template>

<script>
import Search from '@/components/list/Search'
import Tabs from '@/components/footer/Tabs'

import Vue from 'vue'
import vueResource from 'vue-resource'
Vue.use(vueResource)

export default {
  name: 'Chat',
  components: {
    Search,
    Tabs
  },
  data () {
    return {
      send_messages: [],
      receive_messages: []
    }
  },
  created () {
    this.$http.post('/api/user/get-user', { socket_id: this.$socket.id }, {}).then((response) => {
      this.$http.post('/api/user/get-chat-message', { sender: response.body[0].name }, {}).then((res) => {
        this.send_messages = res.body
      })
      // this.$http.post('/api/user/get-friend-message', { name: response.body[0].name }, {}).then((response) => {
      //   this.receive_messages = response.body
      // })
    })
  },
  methods: {
    chat (item) {
      this.$router.push({ name: 'chatWindow', params: item })
    }
  }
}
</script>

<style lang="less" scoped>
.chat-main {
  margin-bottom: 20%;
  .list {
    margin: 6% 0px 0px 2%;
    display: flex;
    width: 100%;
    padding: 1% 0px;
    border-bottom: 0.1px solid gray;
    li {
      list-style: none;
    }
    img {
      width: 60px;
      height: 60px;
      border-radius: 6px;
    }
    .chat-text {
      display: flex;
      margin-left: 4%;
      flex-direction: column;
      .name {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 2%;
      }
      .content {
        margin-top: 2%;
        font-size: 18px;
        color: gray;
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0px;
  }
}
</style>
