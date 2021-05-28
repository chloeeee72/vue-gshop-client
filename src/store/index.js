// vuex最核心的管理对象 store
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)
// vuex这个插件其实就是一个store对象，每个vue应用仅且仅有一个store对象。
// 可见，store是Vuex.Store这个构造函数new出来的实例。

// 在构造函数中可以传一个对象参数。这个参数中可以包含5个对象：
// 1.state – 存放状态
// 2.getters – state的计算属性
// 3.mutations – 更改状态的逻辑，同步操作
// 4.actions – 提交mutation，异步操作
// 5.mudules – 将store模块化
//  如果将store分成一个个的模块的话，则需要用到modules。
//  然后在每一个module中写state, getters, mutations, actions等。

// 1. store 中存储的状态是响应式的，
// 当组件从store中读取状态时，如果store中的状态发生了改变，那么相应的组件也会得到更新；
// 2. 不能直接改变store中的状态。改变store中的状态的唯一途径是提交(commit)mutations。
// 这样使得我们可以方便地跟踪每一个状态的变化。

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
