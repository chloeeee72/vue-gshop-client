// 直接更新state的多个方法对象

// mutations里面是如何更改state中状态的逻辑。
// 更改Vuex中的state的唯一方法是，提交mutation，即store.commit(‘increment’)。

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPS
} from './mutation-types'


// export const savePath = (state, pathName) => {
// state.pathName = pathName;
// };
// mutation_types.js export const RECEIVE_ADDRESS = 'receive_address' // 接受地址
// 保存所有方法，用来改变state的数据
// ↓

export default {
  [RECEIVE_ADDRESS](state, {address}){
    state.address = address
  },
  [RECEIVE_CATEGORIES](state, {categories}) {
    state.categories = categories
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
}
