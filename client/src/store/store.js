import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // NOTE: utilizado para evitar que o state seja diretamente alterado, forçando a ser alterado apenas pelas ações
  strict: true,

  // NOTE: como data(){return{}}
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },

  mutation: {
    setToken(state, stoken) {
      state.token = token;
      if(token) {
        state.isUserLoggedIn = true
      } else {
        state.isUserLoggedIn = false
      }
    },
    setUser(state, user) {
      state.user = user;
    },
  },

  actions: {
    setToken({ commit }, token) {
      commit("setToken", token);
    },
    setUser({ commit }, user) {
      commit("setUser", user);
    },
  },
});
