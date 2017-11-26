<template>
  <div class="circle-main">
    <div class="top">
      <span class="back">< 发现</span>
      <span class="tip">朋友圈</span>
      <router-link class="publish" to="/publish">发布</router-link>
    </div>
    <div class="cover">
      <img class="cover-img" src="static/avatar/3.jpg" alt="cover"/>
      <div class="personal-info">
        <span class="name">{{ currentUser.name }}</span>
        <img class="avatar" :src="currentUser.avatar" alt="avatar"/>
      </div>
    </div>
    <div class="content">
      <img class="avatars" src="static/avatar/3.jpg" alt="avatar"/>
      <div class="describe">
        <span class="name">name</span>
        <span>jdssdfndndjfnjksdfnkjnsdfjknjsdkfnjsndfjnjsdfnjdnsfknsdfknsdfk</span>
        <img class="pictures" src="static/publish/1.jpg" alt="pictures"/></br>
        <span class="date">12:00</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cricle',
  data () {
    return {
      currentUser: []
    }
  },
  created () {
    this.$http.post('/api/user/get-user', { socket_id: this.$socket.id }, {}).then((response) => {
      this.currentUser = response.body[0]
    })
  }
}
</script>

<style lang="less" scoped>
.circle-main {
  margin: -8px;
  margin-right: 0px;
  .top {
    display: flex;
    position: fixed;
    top: 0px;
    width: 100%;
    padding: 3.1% 0px;
    justify-content: space-between;
    font-size: 18px;
    color: white;
    background: #000;
    z-index: 999;
    .back {
      margin-left: 3%;
    }
    .tip {
      margin-right: 6%;
    }
    .publish {
      margin-right: 5%;
      color: white;
      text-decoration: none;
    }
  }
  .cover {
    .cover-img {
      width: 102.3%;
      height: 340px;
    }
    .avatar {
      width: 80px;
      height: 80px;
      border: 3px solid white;
      border-radius: 1px;
    }
    .personal-info {
      position: relative;
      top: -56px;
      float: right;
      .name {
        position: relative;
        top: -48px;
        right: 6px;
        font-size: 18px;
        font-weight: bold;
        color: white;
        letter-spacing: 1.2px;
      }
    }
  }
  .content {
    display: flex;
    margin-top: 48px;
    padding-bottom: 2%;
    width: 102%;
    border-bottom: 0.1px solid gray;
    .avatars {
      margin-left: 2%;
      width: 50px;
      height: 50px;
    }
    .name {
      color: #3557e3;
      font-size: 18px;
      font-weight: bold;
    }
    .describe {
      margin-left: 2%;
      width: 74%;
      font-size: 16px;
      word-wrap: break-word;
    }
    .pictures {
      width: 120px;
      height: 120px;
    }
    .date {
      // position: relative;
      // left: 0px;
    }
  }
}
</style>
