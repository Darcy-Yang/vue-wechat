<template>
  <div class="add-main">
    <Search :showAdd="showStuff" :showSearch="showStuff"/>
    <input type="text" placeholder="请输入昵称" v-model='val' @change="add(val)"/>
  </div>
</template>

<script>
import Search from '@/components/list/Search'

import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)

export default {
  name: 'AddFriend',
  components: {
    Search
  },
  data () {
    return {
      showStuff: false,
      val: ''
    }
  },
  methods: {
    add (val) {
      this.$http.post('/api/user/addUser', {
        name: val,
        avatar: ''
      }, {}).then((response) => {})
      this.$socket.emit('add', val)
      this.val = ''
      this.$router.push('/contact')
    }
  }
}
</script>

<style lang="less" scoped>
.add-main {
  display: flex;
  margin: -8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ebebeb;
  }
  input {
    width: 86%;
    margin: 22% 0px 4% 0px;
    border-radius: 6px; 
    border: none;
    padding: 1% 0px 2% 4%;
  }
</style>
