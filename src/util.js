export default{
  sockets: {
    me (val) {
      this.name = val
    }
  },
  data () {
    this.name = ''
  },
  install (Vue, options) {
    Vue.prototype.getData = function () {
      console.log(this.name)
    }
  }
}
