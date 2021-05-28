// 通过mutations 间接更新state的多个方法对象

// 因为mutations中只能是同步操作，但是在实际的项目中，会有异步操作，
// 那么actions就是为了异步操作而设置的。这样，就变成了在action中去提交mutation，
// 然后在组件的methods中去提交action。只是提交actions的时候使用的是dispatch函数，
// 而mutations则是用commit函数。
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORIES,
  RECEIVE_SHOPS
} from './mutation-types'

import {
  reqAddress,
  reqFoodCategories,
  reqShops
} from '../api'

export default {
  // 异步获取地址
  async getAddress({
    commit,
    state
  }) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 根据结果提交一个mutation
    // 获取成功 code===0
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {
        address
      })
    }
  },
  // 异步获取食品分类数组
  async getCategories({
    commit,
  }) {
    // 发送异步ajax请求 
    const result = await reqFoodCategories()
    // 根据结果提交一个mutation
    if (result.code === 0) {
      const categories = result.data
      commit(RECEIVE_CATEGORIES, {
        categories
      })
    }
  },

  // 异步获取商家数组
  async getShops({
    commit,state
  }) {
    // 发送异步ajax请求
    const{longitude,latitude} = state
    const result = await reqShops(longitude,latitude)
    // 根据结果提交一个mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {
        shops
      })
    }
  }
}
