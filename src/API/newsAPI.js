// 所有的关于新闻的api都放在这里
/* eslint-disable camelcase */
import request from '@/utils/request.js'
export const getNewsList = function (type, key, page, page_size) {
  return request.get('', {
    params: {
      type,
      key,
      page,
      page_size
    }
  })
}
