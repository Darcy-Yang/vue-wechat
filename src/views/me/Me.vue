<template>
  <div class="me-main">
    <Search :showAdd="showStuff" :showSearch="showStuff"/>
    <div class="personal-info">
      <img src="static/avatar/4.jpg" alt="avatar"/>
      <div class="account">
        <span class="name">Daniel Yang</span></br>
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
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.me-main {
  margin: -8px;
  margin-bottom: 18%;
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
        font-size: 24px;
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
    margin: 6% 0px 5% 0px;
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
