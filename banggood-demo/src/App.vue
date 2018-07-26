<template>
  <div id="app">
    <router-view/>
    <ApiLoading />
  </div>
</template>

<script>
import ApiLoading from './components/commons/ApiLoading.vue'
export default {
  name: 'App',
  components: { ApiLoading },
  created () {
    this.$store.dispatch('OPEN_LOADING')
    this.$nextTick(() => {
      this.$store.dispatch('CLOSE_LOADING')
    })
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  min-width 1200px
  font-size 14px

div,p,ul,ol,li,span,a,button,input,textarea,form
  margin:0
  padding:0

button,input,textarea,form
  border 0
i
  font-style normal
ul,ol
  list-style:none

input, button, textarea, select
  font-family inherit
  font-size inherit
  font-weight inherit
  border 0
  background none
  -webkit-appearance none
  outline none

a
  text-decoration none
</style>
