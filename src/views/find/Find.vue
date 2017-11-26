<template>
  <div class="find-main">
    <div class="top">
      <span>发现</span>
    </div>
    <div class="content">
      <div class="circle" @click="circle">
        <span>朋友圈</span>
      </div>
      <div class="scanner">
        <span>扫一扫</span>
      </div>
      <div class="funny">
        <div class="shopping">
          <span>购物</span>
        </div>
        <div class="games">
          <span>游戏</span>
        </div>
      </div>
      <div class="wechat-app">
        <span>小程序</span>
      </div>
    </div>
    <Tabs class="footer"/>
  </div>
</template>

<script>
import Tabs from '@/components/footer/Tabs'

export default {
  name: 'Find',
  components: {
    Tabs
  },
  methods: {
    circle () {
      this.$router.push('/circle')
    }
  }
}
</script>

<style lang="less" scoped>
.find-main {
  margin: -8px;
  margin-bottom: 20%;
  min-height: 600px;  
  background: #ebebeb;
  .top {
    padding: 3.1%;
    text-align: center;
    font-size: 18px;
    letter-spacing: 2px;
    color: white;
    background: #000;
  }
  .content {
    margin-top: 8%;
    .circle {
      margin-bottom: 6%;
      padding: 4%;
      background: white;
    }
    .scanner {
      margin-bottom: 6%;
      padding: 4%;
      background: white;
    }
    .funny {
      margin-bottom: 6%;
      background: white;
      .shopping {
        margin-left: 4%;
        padding: 4% 4% 4% 0px;
        border-bottom: 0.1px solid gray;
      }
      .games {
        padding: 4%;
      }
    }
    .wechat-app {
      margin-bottom: 6%;
      padding: 4%;
      background: white;
    }
  }
  .footer {
    margin-left: 0px;
    position: fixed;
    bottom: 0px;
  }
}
</style>
