import {
  CHANGE_DYNAMIC_TYPE,

} from './mutation-types'

const mutations = {
  // 切换单程往返类型
  [CHANGE_DYNAMIC_TYPE] (state, type) {
    state.queryType = type
  },
}

export default mutations;
