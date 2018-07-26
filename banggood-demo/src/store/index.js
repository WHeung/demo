import Vue from 'vue'
import Vuex from 'vuex'
import abiModule from './modules/abi'
import { Loading } from 'element-ui'

Vue.use(Vuex)
// modules
const store = new Vuex.Store({
  state: {
    loading: '',
    apiLoading: ''
  },
  getters: {},
  mutations: {
    SET_LAODING (state, val) {
      state.loading = val
    },
    SET_API_LOADING (state, val) {
      state.apiLoading = val
    }
  },
  actions: {
    OPEN_LOADING ({ commit }, opt) {
      const options = Object.assign({}, opt)
      const loading = Loading.service(options)
      commit('SET_LAODING', loading)
    },
    CLOSE_LOADING ({ state, commit }) {
      if (state.loading) {
        state.loading.close()
        commit('SET_LAODING', '')
      }
    },
    OPEN_TOAST ({ commit, state }, { content }) {
    }
  },
  modules: {
    abi: abiModule
  }
})
export default store
