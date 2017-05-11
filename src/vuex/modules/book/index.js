/**
 * Created by mimengyu on 16/12/19.
 */
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutation'

const state = {
  flightType: 'single',
  flightDetails:{
    orgCityZh:'北京南苑',
    orgCityCode:'BJS',
    dstCityZh:'广州佛山',
    dstCityCode:'FUO',
    orgDate:'',
    dstDate:''
  },
  passengerNum:{
    adultNum:1,
    childNum:0,
    babyNum:0
  },
}

export default{
  state,
  actions,
  getters,
  mutations
}
