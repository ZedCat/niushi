<template>
  <div class="home-container">
    <!-- 头部标题 -->
    <van-nav-bar title="牛事" fixed />
    <h1>111</h1>
    <h1>222</h1>
    <h1>333</h1>
    <h1>444</h1>
    <h1>555</h1>
  </div>
</template>

<script>
import { getNewsList } from '@/API/newsAPI.js'
export default {
  data () {
    return {
      type: 'top',
      key: '513d00f5ad356e967e9c30e67ee6f69e',
      newsList: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      const { data: res } = await getNewsList(this.type, this.key)

      console.log(res.result.data)
      this.newsList = res.result.data
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  padding: 46px 0 50px 0;
  .van-nav-bar {
    background-color: #4385e1;
    /deep/ .van-nav-bar__title {
      color: #ffffff;
    }
  }
}
</style>
