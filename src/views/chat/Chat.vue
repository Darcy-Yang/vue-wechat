<template>
  <div class="chat-main">
    <Search class="search"/>
    <List/>
  </div>
</template>

<script>
import Search from '@/components/list/Search'
import List from '@/components/list/List'

export default {
  name: 'Chat',
  components: {
    Search,
    List
  }
}
</script>

<style lang="less" scoped>
.chat-main {
  margin: -8px;
}
</style>
