<script>
  export default {
    data () {
      return {
        message: 'Hello Vue.js!'
      }
    },
    computed: {
      newMessage () {
        return this.message + '...'
      }
    }
  }
</script>

<template lang="jade">
  #demo
    p {{ message }}
    input(v-model="message")
</template>

<style lang="stylus" scoped>
  #demo
    border 1px solid green
</style>
