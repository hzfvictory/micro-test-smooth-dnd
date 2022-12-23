import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';
import '@/styles/index.scss';

import microApp from '@micro-zoe/micro-app';


Vue.config.productionTip = false;
Vue.use(ElementUI);


microApp.start({
  plugins: {
    modules: {},
  },
  preFetchApps: [],
});


Vue.mixin({
  data() {
    return {
      microAppEnvironment: (window && window.__MICRO_APP_ENVIRONMENT__) || false,
    };
  },
});

let app = null;

function mount() {
  app = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app');
}

function unmount() {
  app.$destroy();
  app.$el.innerHTML = '';
  app = null;
}

if (window.__MICRO_APP_ENVIRONMENT__) {
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = {
    mount,
    unmount,
  };
} else {
  mount();
}
