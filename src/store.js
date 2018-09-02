import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: {}
  },
  mutations: {
    setUserData (state, payload) {
      state.user = Object.assign({}, state.user, payload.data)
    }
  }
})
