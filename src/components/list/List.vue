<template>
  <div class="list-main">
    <div v-for="item in menus">
      <div class="menu" @click="chat">
        <img class="avatar" :src='avatar' alt="avatar"/>
        <div class="text-info" :style="listStyle">
          <span class="name">name</span></br>
          <span class="content" v-if='showContent'>content</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const avatar = require('../../../static/avatar/avatar.jpg')

export default {
  name: 'List',
  data () {
    return {
      avatar,
      menus: [{}, {}, {}, {}, {}, {}, {}, {}, {}]
    }
  },
  props: {
    listStyle: {
      type: String,
      default: ''
    },
    showContent: {
      type: Boolean,
      default: true
    }
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
