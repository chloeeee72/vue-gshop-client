# vue-gshop-client

vue 外卖客户端app - 前端

## 项目描述

- 此项目为外卖Web App（SPA）
- 包括商家，商品，购物车，用户等多个子页面
- 使用Vue全家桶+ES6+Wepack等前端技术
- 采用模块化、组件化、工程化的模式开发

## 功能页面

.....

## 技术选型
#### 前台数据处理/交互/组件化：
- vue全家桶/技术栈：
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
- mock数据：mockjs
- 接口测试：postman
- ajax请求：vue-resource axios

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

## API接口
[后台项目及接口文档](https://github.com/chloeeee72/vue-gshop-server/blob/master/API%E6%96%87%E6%A1%A3.md)

## TODO
-[√] FooterGuide 组件
-[√] HeaderTop 组件
-[√] 导航路由
-[√] 各个页面的静态组件
-[√] axios 封装
-[√] API 封装
-[] git 版本控制
-[] 配置实现跨域
-[] vuex管理首页数据
-[] 异步 当前地址
-[] 异步 食品分类轮播列表
-[] 加载中页面
-[] Star组件
-[] 登陆页
  -[] 切换登陆方式
  -[] 手机号检查
  -[] 倒计时效果
  -[] 密码切换显示与隐藏
  -[] 表单验证
  -[] 一次性图形验证码
  -[] 发送短信验证码
  -[] 完成登陆请求
  -[] vuex保存用户状态、用户信息
  -[] 登录后更新个人中心界面
  -[] 登录更新跳转路由
  -[] 自动登录
  -[] 退出登录
-[] ...
-[] ...
-[] ...
-[] ...
## Build Setup

``` bash
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
