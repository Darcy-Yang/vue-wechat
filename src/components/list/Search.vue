<template>
  <div class="search-main">
     <div class="top">
      <div>
      </div>
      <div>
        <span>name</span>
      </div>
      <div class="add">
        <span>+</span>
      </div>
    </div> 
    <input type="test" placeholder="搜索"/>
  </div>
</template>

<script>
export default {
  name: 'List'
}
</script>

<style lang="less" scoped>
.search-main {
  display: flex;
  flex-direction: column;
  margin: -8px;
  align-items: center;
  justify-content: center;
  background: #ebebeb;
  .top {
    display: flex;
    position: fixed;
    top: 0;
    padding: 2%;
    width: 100%;
    color: white;
    justify-content: space-between;
    font-size: 24px;
    background: #000;
    .add {
      margin: 0 4% 0 -4%;
    }
  }
  input {
    width: 86%;
    margin: 17% 0px 4% 0px;
    border-radius: 6px; 
    border: none;
    padding: 1% 0px 2% 4%;
  }
}
</style>
