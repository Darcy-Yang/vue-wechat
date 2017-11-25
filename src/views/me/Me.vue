<template>
  <div class="me-main">
    <Search :showAdd="showStuff" :showSearch="showStuff"/>
    <div class="personal-info">
      <img :src="currentUser.avatar" alt="avatar"/>
      <div class="account">
        <span class="name">{{ currentUser.name }}</span></br>
        <span class="num">微信号：xxxxxx</span>
      </div>
    </div>
    <div class="wallet">
      <span>钱包</span>
    </div>
    <div class="functions" >
      <li v-for="item in functions">{{ item.name }}</li>
    </div>
    <div class="seeting">
      <span>设置</span>
    </div>
     <div class="blank"></div>
    <Tabs class="footer"/>
  </div>
</template>

<script>
import Tabs from '@/components/footer/Tabs'
import Search from '@/components/list/Search'

import Vue from 'vue'
import vueResource from 'vue-resource'

Vue.use(vueResource)

export default {
  name: 'Me',
  components: {
    Tabs,
    Search
  },
  data () {
    return {
      showStuff: false,
      functions: [
        { name: '收藏' },
        { name: '相册' },
        { name: '卡包' },
        { name: '表情' }
      ],
      currentUser: []
    }
  },
  sockets: {
  },
  created () {
    this.$http.get('/api/user/get-user').then((response) => {
      if (response.body) {
        this.$http.post('/api/user/get-current', { name: response.body[0].name },{}).then((response) => {
          this.currentUser = response.body[0]
        })
      }
    })
  }
}
</script>

<style lang="less" scoped>
.me-main {
  margin: -8px;
  margin-bottom: 17%;
  background: #ebebeb;
  .personal-info {
    display: flex;
    margin-top: 22%;
    padding: 4% 3%;
    background: white;
    img {
      width: 80px;
      height: 80px;
      border-radius: 6px;
    }
    .account {
      display: flex;
      margin-left: 4%;
      padding: 2% 0px;
      flex-direction: column;
      .name {
        font-size: 22px;
      }
      .num {
        margin-top: -6%;
        font-size: 18px;
      }
    }
  }
  .wallet {
    margin: 6% 0px 6% 0px;
    padding: 4%;
    background: white;
  }
  .functions {
    display: flex;
    flex-direction: column;
    background: white;
    li {
      list-style: none;
      padding: 4% 4% 4% 0%;
      margin-left: 4%;
      border-bottom: 0.1px solid gray;
    }
    :last-child {
        border-bottom: none;
      }
  }
  .seeting {
    margin: 6% 0px 6% 0px;
    padding: 4%;
    background: white;
  }
  .blank {
    padding: 2% 0px 2% 0px;
  }
  .footer {
    margin-left: 0%;
    position: fixed;
    bottom: 0px;
  }
}
</style>
