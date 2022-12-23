import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: {
      title: '编辑工作台',
      icon: 'el-icon-s-home',
    },
    alwaysShow: true,
    children: [
      {
        path: 'home',
        component: () => import('@/pages/home/index'),
        name: 'Home',
        meta: {
          title: '我的首页',
          affix: true,
        },
      },
      {
        path: '/product-list',
        component: () => import('@/pages/product/index'),
        meta: {
          title: '产品列表',
          icon: 'el-icon-s-home',
        },
      },
      {
        path: '/channel-list',
        component: () => import('@/pages/channel/index'),
        meta: {
          title: '渠道列表',
          icon: 'icon-daohangicon-huodongmobanzujian',
        },
      },
    ],
  },
  {
    path: '/product',
    component: () => import('@/pages/product/index'),
    meta: {
      title: '产品列表',
      icon: 'el-icon-s-home',
    },
  },
  {
    path: '/channel',
    component: () => import('@/pages/channel/index'),
    meta: {
      title: '渠道列表',
      icon: 'icon-daohangicon-huodongmobanzujian',
    },
  },
  {
    path: '/login/sso',
    component: () => import('@/pages/login/index'),
  },
  {
    path: '/404',
    component: () => import('@/pages/error-page/404'),
  },
  {
    path: '/500',
    component: () => import('@/pages/error-page/500'),
  },
  {
    path: '*',
    redirect: '/404',
  },
];

export const asyncRoutes = [
  {
    path: '/product',
    component: () => import('@/pages/product/index'),
    meta: {
      title: '产品列表',
      icon: 'el-icon-s-home',
    },
  },
  {
    path: '/channel',
    component: () => import('@/pages/channel/index'),
    meta: {
      title: '渠道列表',
      icon: 'icon-daohangicon-huodongmobanzujian',
    },
  },
];

constantRoutes.concat(asyncRoutes);

const router = new VueRouter({
  routes: constantRoutes,
  mode: 'history',
  base: window.__MICRO_APP_BASE_ROUTE__ || '/',
});

export default router;
