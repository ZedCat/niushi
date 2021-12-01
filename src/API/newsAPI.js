// 所有的关于新闻的api都放在这里
import request from '@/utils/request.js'
export const getNewsList = function (type, key) {
  return request.get('', {
    params: {
      type,
      key
    }
  })
}
