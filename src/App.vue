<template>
  <div id="app">
     <router-view/> 
    <vueFooter class="footer"/>
  </div>
</template>

<script>
import vueFooter from '@/components/Footer'

export default {
  name: 'app',
  components: {
    vueFooter
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
.footer {
  position: fixed;
  bottom: 0px;
}
</style>
