
const state = {
  token: localStorage.getItem('zyToken') || '',
  userName: localStorage.getItem('userName') || '-',
  nickName: '-',
  avatar: '',
};
const mutations = {
  LOGIN(_state, data) {
    state.token = data.token;
    state.userName = data.username;
    state.nickName = data.nickName;
    state.avatar = data.avatar;
    localStorage.setItem('zyToken', data.token);
    localStorage.setItem('userName', data.username);
  },
  LOGIN_OUT() {
    state.token = '';
    state.userName = '-';
    localStorage.removeItem('zyToken');
    localStorage.removeItem('userName');
  },
};
const actions = {
  login({ commit }, formdatas) {
    commit('LOGIN', formdatas);
  },
  loginOut({ commit }) {
    commit('LOGIN_OUT');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
