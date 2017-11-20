<template>
  <div class="search-main">
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
  justify-content: center;
  background: #ebebeb;
  input {
    width: 86%;
    margin: 3% 0px;
    border-radius: 6px; 
    border: none;
    padding: 1% 0px 2% 4%;
  }
}
</style>
