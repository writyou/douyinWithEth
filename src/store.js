import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gateway:'',
    videoShare:null,
    userAccount:null,
  },
  mutations: {
    setGateWay(state, visible){
      state.gateway = visible
    },
    setVideoShare(state, visible){
      state.videoShare = visible
    },
    setUserAccount(state, visible){
      state.userAccount = visible
    },
  },
  actions: {

  }
})
