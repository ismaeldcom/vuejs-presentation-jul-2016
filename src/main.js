import Vue from 'vue'
import router from './router'
import store from './store'

Vue.config.debug = process.env.DEBUG_MODE

import Navigation from 'components/Navigation'

const App = Vue.extend({
  store,
  components: { Navigation }
})

router.start(App, '#app')
