<template>
  <div class="list-main">
    <img class="avatar" :src='avatar' alt="avatar"/>
    <div class="text-info">
      <span class="name">name</span></br>
      <span class="content">content</span>
    </div>
  </div>
</template>

<script>
const avatar = require('../../../static/avatar/avatar.jpg')

export default {
  name: 'List',
  data () {
    return {
      avatar
    }
  }
}
</script>

<style lang="less" scoped>
.list-main {
  display: flex;
  margin-top: 5px;
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 6px;
  }
  .text-info {
    margin-left: 20px;
  }
}
</style>
