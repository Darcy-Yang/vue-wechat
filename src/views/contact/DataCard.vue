<template>
  <div class="data-main">
    <div class="top">
      <router-link to="contact">< 通讯录</router-link>
      <span class="middle">详细资料</span>
      <span class="details">...</span>
    </div>
    <div class="bridge"></div>
    <div class="personal-info">
      <img :src="info.avatar" alt="avatar"/>
      <div class="account">
        <span class="name">{{ info.name }}</span>
        <span class="num">微信号:xxxxx</span>
      </div>
    </div>
    <div class="group-one">
      <li>
        <span class="remark">设置备注和标签</span>
      </li>
      <li>
        <span class="number">电话号码：1234567</span>
      </li>
    </div>
    <div class="group-two">
      <li>
        <span class="area">地区: 阿尔及利亚</span>
      </li>
      <li>
        <div class="show-photos">
          <span class="describe">个人相册</span>
          <div class="photos">
            <img src="static/avatar/3.jpg"/>
            <img src="static/avatar/avatar.jpg"/>
          </div>
        </div>
      </li>
      <li>
        <span class="more">更多</span>
      </li>
    </div>
    <div class="chat">
      <button>发消息</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'dataCard',
  data () {
    return {
      info: []
    }
  },
  created () {
    this.info = this.$route.params
  }
}
</script>

<style lang="less" scoped>
.data-main {
  margin: -8px;
  background: #ebebeb;
  .top {
    display: flex;
    position: fixed;
    top: 0px;
    width: 100%;
    justify-content: space-between;
    padding: 4% 2%;
    font-size: 18px;
    letter-spacing: 1.4px;
    color: white;
    background: #000;
    a {
      color: white;
      text-decoration: none;
    }
    .middle {
      margin-right: 10%;
    }
    .details {
      font-weight: bold;
      margin: -1% 6% 2% 0px;
    }
  }
  .bridge {
    padding: 6%;
  }
  .personal-info {
    display: flex;
    margin-top: 11%;
    padding: 4%;
    background: white;
    img {
      width: 80px;
      height: 80px;
      border-radius: 6px;
    }
    .account {
      display: flex;
      margin-left: 2%;
      padding: 2%;
      flex-direction: column;
      .name {
        font-size: 24px;
      }
      .num {
        margin-top: 16%;
      }
    }
  }
  .group-one {
    margin: 6% 0px;
    background: white;
    li {
      margin-left: 6%;
      padding: 4% 4% 4% 0%;
      border-bottom: 0.1px solid gray;
      list-style: none;
    }
    :last-child {
      border-bottom: none;
    }
  }
  .group-two {
    margin-top: 6%;
    background: white;
    li {
      margin-left: 6%;
      padding: 4% 4% 4% 0%;
      border-bottom: 0.1px solid gray;
      list-style-type: none;
      img {
        width: 80px;
        height: 80px;
      }
      .show-photos {
        display: flex;
        .describe {
          margin: auto 0;
          margin-right: 6%;
        }
      }
    }
    :last-child {
      border-bottom: none;
    }
  }
  .chat {
    display: flex;
    justify-content: center;
    margin: 6%;
    padding-bottom: 10%;
    button {
      width: 86%;
      height: 48px;
      border-radius: 6px;
      border: none;
      color: white;
      font-size: 18px;
      letter-spacing: 2.2px;
      background: #38bd17;
    }
  }
}
</style>
