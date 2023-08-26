import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
let router = useRouter()
// 创建axios实例
// 创建请求时可以用的配置选项
const request = axios.create({
  withCredentials: true, //发送cookie
  timeout: 10000,
  baseURL: '/api',
})
// axios的全局配置
request.defaults.headers.post = {
  'Content-Type': 'application/x-www-form-urlencoded',
}
// request.defaults.headers.common = {
//   'Auth-Type': 'company-web',
//   'X-Requested-With': 'XMLHttpRequest',
// }

// 添加请求拦截器（post只能接受字符串类型数据）
request.interceptors.request.use(
  // 统一设置用户身份 token
  (config) => {
    if (localStorage.getItem('token') && config.headers) {
      config.headers.token = localStorage.getItem('token')
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 错误处理
const errorHandle = (status: any, other: any) => {
  switch (status) {
    case 400:
      ElMessage({
        message: '信息校验失败',
        grouping: true,
        type: 'error',
      })
      // ElMessage.error('信息校验失败')
      break
    case 401:
      router.push('home')
      // ElMessage.error('认证失败')
      break
    case 403:
      ElMessage({
        message: '没有权限',
        grouping: true,
        type: 'error',
      })
      // ElMessage.error('没有权限')
      break
    case 404:
      ElMessage({
        message: '请求资源不存在',
        grouping: true,
        type: 'error',
      })
      // ElMessage.error('请求资源不存在')
      break
    default:
      ElMessage({
        message: other,
        grouping: true,
        type: 'error',
      })
      // ElMessage.error(other)
      break
  }
}

// 添加响应拦截器
request.interceptors.response.use(
  // 响应包含以下信息data,status,statusText,headers,config
  (response) => {
    if (response.data.hasOwnProperty('code') && response.data.code != 1) {
      console.log(response)
      ElMessage({
        message: response.data.msg,
        grouping: true,
      })
    }

    return response.status === 200
      ? Promise.resolve(response)
      : Promise.reject(response)
  },
  (err) => {
    const { response } = err
    if (response) {
      errorHandle(response.status, response.data)
      return Promise.reject(response)
    }
    ElMessage({
      message: '请求失败' + err,
      grouping: true,
      type: 'error',
    })
    // ElMessage.error('请求失败' + err)
    return true
  }
)

export default request
