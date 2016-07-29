import {types} from './constants'

const state = {
  count: 0
}

const mutations = {
  [types.INCREMENT] (state) {
    state.count++
  },
  [types.DECREMENT] (state) {
    state.count--
  }
}

export default {
  state, mutations
}
