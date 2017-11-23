<template>
  <div class="list-main">
    <div v-for="item in menus">
      <div class="menu" @click="chat">
        <img class="avatar" :src="item.avatar" alt="avatar"/>
        <div class="text-info">
          <span class="name">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)

export default {
  name: 'List',
  data () {
    return {
      menus: []
    }
  },
  sockets: {
    addUser (val) {
      this.menus.push(val)
    }
  },
  created () {
    this.$http.get('/api/user/allUser').then((response) => {
      this.menus = response.body
    })
  },
  methods: {
    chat () {
      this.$router.push({ name: 'chatWindow' })
    }
  }
}
</script>

<style lang="less" scoped>
.list-main {
  // 此处左margin不能过大，否则会出现页面拉伸的情况；
  margin: 1% 0% 0px 2%;
  width: 100%;
  .menu {
    display: flex;
    width: 100%;
    padding: 3% 0px;
    border-bottom: 0.1px solid gray;
  }
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 6px;
  }
  .text-info {
    margin-left: 4%;
    .name {
      font-weight: bold;
      font-size: 17px;
    }
  }
}
</style>
