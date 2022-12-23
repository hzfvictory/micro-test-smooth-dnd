import axios from 'axios';
import Vue from 'vue';
import { Message } from 'element-ui';
import { createRedirectUri } from '@/utils/sso';

// 允许携带cookie
axios.defaults.withCredentials = true;

const $axios = axios.create({
  // 设置超时时间
  timeout: 30000,
  // 基础url，会在请求url中自动添加前置链接
  baseURL: process.env.VUE_APP_BASE_API,
});

Vue.prototype.$http = axios; // 并发请求

// 请求拦截器
$axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
// 响应拦截器
$axios.interceptors.response.use(
  (response) => {
    const code = response.status;
    if ((code >= 200 && code < 300) || code === 304) {
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          Message.error('请求错误');
          break;
        case 401:
          Message.error('身份验证失败，请重新登录');
          setTimeout(() => {
            window.location.replace(createRedirectUri());
          }, 1500);
          break;
        case 404:
          Message.error('网络请求不存在');
          break;
        case 500:
          Message.error('服务器内部错误!');
          break;
        default:
          Message.error(error.response.data.msg);
      }
    } else {
      // 请求超时或者网络有问题
      error.message.includes('timeout') ? Message.error('请求超时！请检查网络是否正常') : Message.error('请求失败，请检查网络是否已连接');
    }
    return Promise.reject(error);
  },
);

// 请求方法
export default {
  post(url, data) {
    return $axios({
      method: 'post',
      url,
      data,
    });
  },
  get(url, params) {
    return $axios({
      method: 'get',
      url,
      params,
    });
  },
  delete(url, params) {
    return $axios({
      method: 'delete',
      url,
      params,
    });
  },
  patch(url, params) {
    return $axios({
      method: 'patch',
      url,
      params,
    });
  },
  put(url, params) {
    return $axios({
      method: 'put',
      url,
      params,
    });
  },
  download(url, data) {
    return $axios({
      method: 'get',
      url,
      data,
      responseType: 'blob',
    });
  },
  upload(url, data) {
    return $axios({
      method: 'post',
      url,
      data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};
