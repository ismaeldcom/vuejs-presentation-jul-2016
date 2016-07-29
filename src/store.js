import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter/state'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.DEBUG_MODE,
  modules: {
    counter
  }
})
