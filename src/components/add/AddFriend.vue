<template>
  <div class="add-main">
    <Search :showAdd="showAdd" :tips="tips" :search="search"/>
  </div>
</template>

<script>
import Search from '@/components/list/Search'

import VueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'
import Vue from 'vue'

Vue.use(VueSocketio, socketio('http://localhost:3000'))

export default {
  name: 'AddFriend',
  components: {
    Search
  },
  data () {
    return {
      showAdd: false,
      tips: '请输入搜索昵称'
    }
  },
  methods: {
    search () {
      console.log('search')
    }
  }
}
</script>

<style lang="less" scoped>
.add-main {
  display: flex;
  flex-direction: column;
  input {
    width: 86%;
    margin-top: 20%;
  }
}
</style>
