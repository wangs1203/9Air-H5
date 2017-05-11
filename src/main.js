// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from 'store'

// import {init} from 'components/index'


// init();

Vue.config.productionTip = false

// import Header from 'wdui/Header'
// Vue.component(Header.name,Header);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
