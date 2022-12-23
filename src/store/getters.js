const getters = {
  token: (state) => state.user.token,
  avatar: (state) => state.user.avatar,
  nickName: (state) => state.user.nickName,
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  permission_routes: (state) => state.permission.routes,
};
export default getters;
