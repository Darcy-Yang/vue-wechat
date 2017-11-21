<template>
  <div class="contact-main">
    <Search/>
    <List :showContent='showContent' :listStyle='listStyle'/>
    <Tabs class="footer"/>
  </div>
</template>

<script>
import Search from '@/components/list/Search'
import List from '@/components/list/List'
import Tabs from '@/components/footer/Tabs'

export default {
  name: 'Contact',
  components: {
    Search,
    List,
    Tabs
  },
  data () {
    return {
      showContent: false,
      listStyle: 'padding: 4% 0px;'
    }
  }
}
</script>

<style lang="less" scoped>
.contact-main {
  // margin: -8px;
  .footer {
    position: fixed;
    bottom: 0px;
  }
}
</style>
