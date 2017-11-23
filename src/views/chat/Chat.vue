<template>
  <div class="chat-main">
    <Search class="search"/>
    <!-- <List/> -->
    <Tabs class="footer"/>
  </div>
</template>

<script>
import Search from '@/components/list/Search'
import List from '@/components/list/List'
import Tabs from '@/components/footer/Tabs'

export default {
  name: 'Chat',
  components: {
    Search,
    List,
    Tabs
  }
}
</script>

<style lang="less" scoped>
.chat-main {
  margin-bottom: 20%;
  .footer {
    position: fixed;
    bottom: 0px;
  }
}
</style>
