<template>
  <div class="main">
    add
  </div>
</template>

<script>
import CallApi from '@/config/ajax/index.js'

export default {
  name: 'abi-model-view',
  data () {
    return {}
  },
  mounted () {
    CallApi('DEMO_GET')
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>

</style>
