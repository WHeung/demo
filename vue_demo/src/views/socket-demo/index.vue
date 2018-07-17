<template>
  <div :class="$style.main">
    <div :class="$style.list" v-for="(item, index) in textHistory" :key="index">{{item}}</div>
    <div :class="$style.socket">
      <input type="text" v-model="input">
      <button @click="submit">submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'socket',
  data () {
    return {
      input: '',
      textHistory: []
    }
  },
  sockets: {
    connect () {
      // this.id = this.$socket.id
      console.log('connect succeed')
    },
    emit_input (val) {
      this.textHistory.push(val.text)
    }
  },
  methods: {
    submit () {
      this.textHistory.push(this.input)
      this.$socket.emit('emit_input', this.input)
    }
  }
}
</script>

<style lang="stylus" module>
.socket
  input, button
    border 1px solid #ddd
    border-radius 2px
</style>
