<template>
  <div class="publish-main">
    <div class="top">
      <span class="cancel">取消</span>
      <span class="send">发送</span>
    </div>
    <div class="content">
      <textarea type="text" placeholder="这一刻的想法..."/>
      <input type="file" accept="image/*"/>
    </div>
    <div class="location">
      <span>所在位置</span>
    </div>
    <div class="authority">
      <div class="authority-one">
        <span>谁可以看</span>
      </div>
      <div class="authority-two">
        <span>提醒谁看</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'publish'
}
</script>

<style lang="less" scoped>
.publish-main {
  margin: -8px;
  min-height: 600px;
  background: #ebebeb;
  .top {
    display: flex;
    padding: 3.1% 0px;
    width: 100%;
    position: fixed;
    top: 0px;
    justify-content: space-between;
    font-size: 18px;
    letter-spacing: 1.2px;
    background: #000;
    .cancel {
      margin-left: 4%;
      color: white;
    }
    .send {
      margin-right: 4%;
      color: #38bd17;
    }
  }
  .content {
    display: flex;
    margin-top: 18%;
    flex-direction: column;
    align-items: center;
    background: white;
    textarea {
      width: 88%;
      height: 100px;
      border: none;
      resize: none;
    }
    input {
      margin-left: 6%;
      padding: 4% 0px;
      width: 94%;
      border-bottom: 0.1px solid gray;
    }
  }
  .location {
    padding: 4% 6%;
    background: white;
  }
  .authority {
    display: flex;
    margin-top: 8%;
    flex-direction: column;
    background: white;
    .authority-one {
      margin-left: 6%;
      padding: 4% 0px;
      width: 94%;
      border-bottom: 0.1px solid gray;
    }
    .authority-two {
      padding: 4% 6%;
    }
  }
}
</style>
