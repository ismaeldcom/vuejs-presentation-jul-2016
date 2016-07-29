<script>
  import Button from '../../components/Button'
  import {increment, decrement} from './actions'
  export default {
    vuex: {
      getters: {
        count: ({counter}) => counter.count
      },
      actions: {
        increment, decrement
      }
    },
    components: { Button }
  }
</script>

<template lang="jade">
  div
    button(@click="increment", text="+")
    label {{ count }}
    button(@click="decrement", text="-")
</template>

<style lang="stylus" scoped>
  label
    padding 0 20px
</style>
