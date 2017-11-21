<template>
  <div class="me-main">
    <span>Me</span>
    <Tabs class="footer"/>
  </div>
</template>

<script>
import Tabs from '@/components/footer/Tabs'

export default {
  name: 'Me',
  components: {
    Tabs
  }
}
</script>

<style lang="less" scoped>
.me-main {
  .footer {
    position: fixed;
    bottom: 0px;
  }
}
</style>
