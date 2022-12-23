import API from './request';

/**
 * sso登录
 * @returns
 */
export function loginBySso(data) {
  const url = '/permission/user/loginBySso';
  return API.get(url, data);
}

/**
 * 获取用户信息
 * @returns
 */
export function getUserInfo(data) {
  const url = '/permission/user/info';
  return API.get(url, data);
}

/**
 * 获取子系统用户权限接口
 * @param {String} userName 用户名
 * @param {Number} systemId 子系统id
 * @returns
 */
export function getUserSystemRole(data) {
  const url = '/permission/api/user/role/list';
  return API.get(url, data);
}

/**
 * 登出接口
 * @returns
 */
export function logout(data) {
  const url = '/permission/user/logout';
  return API.post(url, data);
}
