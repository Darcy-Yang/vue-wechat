<template>
  <div class="contact-main">
    <Search/>
  </div>
</template>

<script>
import Search from '@/components/list/Search'

export default {
  name: 'Contact',
  components: {
    Search
  }
}
</script>

<style lang="less" scoped>
.contact-main {
  margin: -8px;
}
</style>
