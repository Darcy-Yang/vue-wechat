// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import vueSocketio from 'vue-socket.io'
import socketio from 'socket.io-client'

import vueResource from 'vue-resource'

Vue.use(vueSocketio, socketio('http://localhost:3000'))
Vue.use(vueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  sockets: {
    // me (val) {
    //   this.$http.post('/api/user/current-user', {
    //     name: val
    //   }, {}).then((response) => {})
    // }
    socketId (val) {
      // Vue.prototype.$data = val
      this.$http.post('/api/user/update-id', {
        socket_id: val[0],
        name: val[1]
      }, {}).then((response) => {})
    }
  }
})
