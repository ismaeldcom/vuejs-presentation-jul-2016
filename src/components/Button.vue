<script>
  export default {
    props: ['text']
  }
</script>

<template>
  <button>{{ text }}</button>
</template>

<style lang="stylus" scoped>
  @import "../colors.styl"
  button
    border 0
    background-color $green
    color white
    padding 6px 10px
</style>
