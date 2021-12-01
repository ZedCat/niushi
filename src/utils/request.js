// 封装的请求js
import axios from 'axios'
const request = axios.create({
  // 定义接口的基础URL地址，发起请求时只需要按需传入参数即可
  baseURL: 'http://v.juhe.cn/toutiao/index'
})
export default request
