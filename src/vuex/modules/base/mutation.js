import {
  NOW_PATH,
  BACK_PATH,
  NEXT_PATH,
  PAGE_CHANGE_STATUS,
  HEADER_TIT,
  SET_USERNAME,
  SET_LOGINSTATUS,
  SET_TOKEN

} from './mutation-types'

const mutations = {
  //设置当前路径
  [NOW_PATH] (state, path) {
    state.path = path
  },
  //设置返回路径
  [BACK_PATH] (state, path) {
    state.backPath = path
  },
  //设置将要跳转到的路径
  [NEXT_PATH] (state, path) {
    state.nextPath = path
  },
  //设置路由切换时的状态
  [PAGE_CHANGE_STATUS] (state, status) {
    state.pageChangeStatus = status
  },
  //设置顶部tit
  [HEADER_TIT] (state, tit) {
    state.headerTit = tit
  },
  //设置用户名
  [SET_USERNAME] (state, userName) {
    state.userName = userName
  },
  //设置登录状态
  [SET_LOGINSTATUS] (state, loginStatus) {
    state.loginStatus = loginStatus
  },
  //设置token
  [SET_TOKEN] (state, token) {
    state.token = token
  },

}


export default mutations;
