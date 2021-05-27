// import axios from 'axios'

// //在开发环境中的测试 development
// if (process.env.NODE_ENV == 'development') {
//   axios.defaults.baseURL = 'http://localhost:8082/'
// }
// //在生产环境中的测试 production
// if (process.env.NODE_ENV == 'production') {
//   axios.defaults.baseURL = 'http://120.53.31.103:84/'
// }
// //还有一种环境 debug

// //响应超时的时间
// axios.defaults.timeout = 5000;

// //接口请求拦截
// axios.interceptors.request.use(
//   config => {
//     config.headers = {
//       DeviceType: 'H5'
//     } //设置响应头部
//     return config
//   }
// )

// // post
// export function get(url, params) {
//   return new Promise((resolve, reject) => {
//     axios.get(url, {
//       params: params,
//     }).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }

// // get
// export function post(url, params) {
//   return new Promise((resolve, reject) => {
//     let dataStr = ""; // 数据拼接字符串
//     Object.keys(data).forEach(key => {
//       dataStr += key + "=" + data[key] + "&";
//     });
//     if (dataStr !== "") {
//       dataStr = dataStr.substring(0, dataStr.lastIndexOf("&"));
//       url = url + "?" + dataStr;
//     }
//     axios.post(url, params)
//       .then(res => {
//         resolve(res.data)
//       })
//       .catch(err => {
//         reject(err.data)
//       })
//   })
// }
