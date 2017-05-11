//切换航班类型
export const changeFlightType = ({commit}, typeVal) => {
  commit('CHANGE_FLIGHT_TYPE', typeVal)
}

//切换出发到达信息
export const changeOrgDstMes = ({commit}) => {
  commit('CHANGE_ORGDST_MES')
}

//设置出发城市
export const setOrgCity = ({commit},payload) => {
  commit('SET_ORG_CITY',payload)
}

//设置到达城市
export const setDstCity = ({commit},payload) => {
  commit('SET_DST_CITY',payload)
}

//设置出发日期
export const setOrgDate = ({commit}, Val) => {
  commit('SET_ORG_DATE', Val)
}

//设置到达日期
export const setDstDate = ({commit}, Val) => {
  commit('SET_DST_DATE', Val)
}

//设置成人数量
export const setAdultNum = ({commit}, Val) => {
  commit('SET_PASSENGER_ADULT', Val)
}

//设置儿童数量
export const setChildNum = ({commit}, Val) => {
  commit('SET_PASSENGER_CHILD', Val)
}

//设置婴儿傻数量
export const setBabyNum= ({commit}, Val) => {
  commit('SET_PASSENGER_BABY', Val)
}
