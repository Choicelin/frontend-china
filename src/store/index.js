import Vue from 'vue'
import Vuex from 'vuex'

import mutations from '@/store/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    browserWidth: 0
  },
  mutations,
  actions: {
  },
  modules: {
  }
})
