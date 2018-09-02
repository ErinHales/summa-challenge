import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loggedIn: false,
    user: {}
  },
  mutations: {
    setUserData (state, payload) {
      state.user = Object.assign({}, state.user, payload.data)
    },
    toggleLogin (state, payload) {
      // state.loggedIn = Object.assign({}, state.loggedIn, payload.toggle)
      state.loggedIn = payload.toggle
    }
  }
})
