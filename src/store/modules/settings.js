import defaultSettings from '@/settings';

const { tagsView, fixedHeader, sidebarLogo } = defaultSettings;

const state = {
  tagsView,
  fixedHeader,
  sidebarLogo,
};

const mutations = {
  CHANGE_SETTING: (_state, { key, value }) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value;
    }
  },
};

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

