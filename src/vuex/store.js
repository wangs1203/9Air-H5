import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//所有模块应用级状态
import base from './modules/base'
//预订流程应用级状态
import book from './modules/book'
//会员中心应用级状态
import usercenter from './modules/usercenter'
//航班动态应用级状态
import dynamic from './modules/dynamic'
//增值服务应用级状态
import addService from './modules/addService'


export default new Vuex.Store({
    modules: {
        base,
        book,
        usercenter,
        dynamic,
        addService
    },
    strict: true
})
