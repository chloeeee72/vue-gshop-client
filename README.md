# vue-gshop-client

vue 外卖客户端 app - 前端

## 项目描述

- 此项目为外卖 Web App（SPA）
- 包括商家，商品，购物车，用户等多个子页面
- 使用 Vue 全家桶+ES6+Wepack 等前端技术
- 采用模块化、组件化、工程化的模式开发

## 功能页面

.....

## 技术选型

#### 前台数据处理/交互/组件化

- vue 全家桶/技术栈：
  - vue.js
  - vue-router
  - vuex
  - mint-ui
  - vue-lazyload
  - vue-scroller
- 滑动库：
  - vue-scroller
  - better-scroll
  - swiper
- 日期处理：
  - moment
  - date-fns

#### 前后台交互：

- mock 数据：mockjs
- 接口测试：postman
- ajax 请求：vue-resource axios

#### 模块化

- ES6
- babel

#### 项目构建工程化

- webpack
- vue-cli
- eslint

#### css 预编译器

- stylus

## 前端路由

#### 一级路由

- 首页 （显示底部导航）
- 搜索（显示底部导航）
- 订单（显示底部导航）
- 个人（显示底部导航）
- 登陆（不显示底部导航）
- 商家（不显示底部导航）

#### 二级路由（商家）

- 商家商品
- 商家评价
- 商家信息

## API 接口

[后台项目及接口文档](https://github.com/chloeeee72/vue-gshop-server/blob/master/API%E6%96%87%E6%A1%A3.md)

## TODO

- [√] FooterGuide 组件
- [√] HeaderTop 组件
- [√] 导航路由
- [√] 各个页面的静态组件
- [√] axios 封装
- [√] API 封装
- [√] 配置实现跨域
- [√] vuex 管理首页数据(模块化)
  - 运行过程：组件派发任务到 actions，actions 触发 mutations 中的方法，然后 mutations 来改变 state 中的数据，数据变更后响应推送给组件，组件重新渲染
  - state.js：保存所有数据，以对象的方式导出
  - action.js：暴露给用户使用，间接触发 mutations 方法的一种 " 中间商 "，借此触发 mutations 中的方法，保存数据（可执行异步操作），避免用户去直接操作 state
  - mutations.js：保存所有方法，用来改变 state 的数据
  - index.js：引入相应模块，暴露出 store，供 vue 注册后全局使用
  - main.js 中引入 index.js
  - 保存数据
    - import { mapActions } from 'vuex';
    - 方法一(dispatch)：通过 disptach 派发给 actions，让 actions 去触发 this.\$store.dispath('actions.js 文件中所定义的方法名',this.data)
    - 方法二(映射)：通过在 methods 中添加映射关系，数组方式，意味着我们可以在数组中写多个方法（这里数组中的每一个方法名是 actions.js 文件中所定义的方法名），然后在需要使用的地方直接 this.方法名即可。当然，也可以直接绑定给 html 中的某个事件。
    - 1.添加映射关系 methods:{ ...mapActions['actions.js 文件中所定义的方法名']}
    - 2.使用 this.方法名
  - 获取数据
    - import { mapState } from 'vuex';
    - computed:{...mapState(['state.js 文件中定义的变量名'])} 这种方式很简洁，但是组件中的 state 的名称就跟 store 中映射过来的同名
    - watch:{ 变量名(数据){this.data = 数据}}
      - 监听 mapState 中的变量，当数据变化（有值、值改变等），
      - 保证能拿到完整的数据，不至于存在初始化没有数据的问题，然后可以赋给本组件 data 中的变量
- [√] 异步 主页显示当前地址
- [√] 异步 食品分类轮播列表
- [√] 加载中的骨架屏
- [√] Star 组件
- [ ] 登陆/注册
  - [√] 切换登陆方式
  - [ ] 手机号检查
  - [ ] 倒计时效果
  - [ ] 密码切换显示与隐藏
  - [ ] 表单验证
  - [ ] 一次性图形验证码
  - [ ] 发送短信验证码
  - [ ] 完成登陆请求
  - [ ] vuex 保存用户状态、用户信息
  - [ ] 登录后更新个人中心界面
  - [ ] 登录更新跳转路由
  - [ ] 自动登录
  - [ ] 退出登录
- [ ] ...
- [ ] ...
- [ ] ...
- [ ] ...

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
