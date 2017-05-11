import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/home' //H5首页

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    //-------------------------------------------------预订流程-------------------------------------------------//
    // 航班查询
    {
      path: '/book/flightQuery',
      component: resolve => {
              require(['views/book/flightQuery'], resolve)
          },
      name:'航班查询'
    },
  ]
})
