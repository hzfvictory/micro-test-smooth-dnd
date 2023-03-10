import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import user from './modules/user';
import permission from './modules/permission';
import app from './modules/app';
import settings from './modules/settings';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    permission,
    app,
    settings,
  },
  getters,
});
