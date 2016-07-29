<script>
  // import Vue from 'vue' // Varible never used
  export default {
    data () {
      return {
        message: 'Hello Vue.js!'
      }
    },
    computed: {
      newMessage () {
        return this.message + '...'
      } // Unexpected trailing comma
      // another: () => "" // Strings must use singlequote
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
