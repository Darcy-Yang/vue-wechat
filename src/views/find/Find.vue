<template>
  <div class="find-main">
    <span>Find</span>
    <Tabs class="footer"/>
  </div>
</template>

<script>
import Tabs from '@/components/footer/Tabs'

export default {
  name: 'Find',
  components: {
    Tabs
  }
}
</script>

<style lang="less" scoped>
.find-main {
  .footer {
    position: fixed;
    bottom: 0px;
  }
}
</style>
