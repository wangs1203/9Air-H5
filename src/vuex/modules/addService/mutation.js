import {
  CHANGE_ADDSERVICE_TYPE,

} from './mutation-types'

const mutations = {
  // 切换增值服务购买类型
  [CHANGE_ADDSERVICE_TYPE] (state, type) {
    state.addServiceType = type
  },
}

export default mutations;
