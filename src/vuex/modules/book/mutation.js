import {
  CHANGE_FLIGHT_TYPE,
  CHANGE_ORGDST_MES,
  SET_ORG_CITY,
  SET_DST_CITY,
  SET_ORG_DATE,
  SET_DST_DATE,
  SET_PASSENGER_ADULT,
  SET_PASSENGER_CHILD,
  SET_PASSENGER_BABY

} from './mutation-types'

const mutations = {
  // 切换单程往返类型
  [CHANGE_FLIGHT_TYPE] (state, typeVal) {
    state.flightType = typeVal
  },
  //切换出发到达信息
  [CHANGE_ORGDST_MES] (state) {
    [state.flightDetails.orgCityZh,state.flightDetails.dstCityZh] = [state.flightDetails.dstCityZh,state.flightDetails.orgCityZh];
    [state.flightDetails.orgCityCode,state.flightDetails.dstCityCode] = [state.flightDetails.dstCityCode,state.flightDetails.orgCityCode];
  },

  // 设置出发城市
  [SET_ORG_CITY] (state,payload) {
    state.flightDetails.orgCityZh = payload.orgCityZhVal;
    state.flightDetails.orgCityCode = payload.orgCityCodeVal;
  },
  // 设置到达城市
  [SET_DST_CITY] (state,payload) {
    state.flightDetails.dstCityZh =  payload.dstCityZhVal;
    state.flightDetails.dstCityCode =  payload.dstCityCodeVal;
  },
  //设置出发日期
  [SET_ORG_DATE] (state,orgDateVal) {
    state.flightDetails.orgDate = orgDateVal
  },
  //设置到达日期
  [SET_DST_DATE] (state,dstDateVal) {
    state.flightDetails.dstDate = dstDateVal
  },


  //设置乘机人数量:成人
  [SET_PASSENGER_ADULT] (state,Val) {
    state.passengerNum.adultNum = Val
  },
  //设置乘机人数量:儿童
  [SET_PASSENGER_CHILD] (state,Val) {
    state.passengerNum.childNum = Val
  },
  //设置乘机人数量:婴儿
  [SET_PASSENGER_BABY] (state,Val) {
    state.passengerNum.babyNum = Val
  },
}


export default mutations;
