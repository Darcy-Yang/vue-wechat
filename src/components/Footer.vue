<template>
  <div class="tabs">
    <router-link to="chat">微信</router-link>
    <router-link to="contact">通讯录</router-link>
    <router-link to="find">发现</router-link>
    <router-link to="me">我</router-link>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="less" scoped>
.tabs {
  display: flex;
  margin-left: -8px;
  width: 100%;
  height: 10%;
  justify-content: space-around;  
  background: #e0d7d7;
  a {
    margin: auto 0px;
    color: green;
    font-size: 18px;
    text-decoration: none;
  }
}
</style>
