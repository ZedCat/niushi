<template>
  <div class="home-container">
    <!-- 头部标题 -->
    <van-nav-bar title="牛事" fixed />
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ArticleInfor
        v-for="item in newsList"
        :key="item.uniquekey"
        :title="item.title"
        :imgsrc1="item.thumbnail_pic_s"
        :author="item.author_name"
        :comments="item.is_content"
        :publishdate="item.date"
        :urt="item.url"
      ></ArticleInfor>
    </van-list>
  </div>
</template>

<script>
import { getNewsList } from '@/API/newsAPI.js'
import ArticleInfor from '@/components/Article/ArticleInfor.vue'
export default {
  components: { ArticleInfor },
  data () {
    return {
      type: 'top',
      key: '513d00f5ad356e967e9c30e67ee6f69e',
      page: 1,
      page_size: 10,
      newsList: [],
      // 是否正在加载下一页数据，如该值为true则不会反复触发loading事件
      // 每当下一页数据请求回来后需要把该值改成false
      loading: true,
      // 所有数据是否全部加载完成，如果没有更多数据了要把该值改成true
      finished: false
    }
  },
  created () {
    this.getList()
  },
  methods: {
    // 请求数据方法
    async getList () {
      const { data: res } = await getNewsList(
        this.type,
        this.key,
        this.page,
        this.page_size
      )
      console.log(res.result.data)
      this.newsList = res.result.data
      // 上拉加载更多后不能覆盖数据，需要合并两个数组
      this.newsList = [...this.newsList, ...res.result.data]
      // 第一次请求完数据后获得第一页数据后把值改成false，下次即可触发下拉加载
      this.loading = false
      // 请求数据后发现总值没有页码值大说明没有数据了，停止发起请求
      if (res.result.data.length === 0) {
        this.finishe = true
      }
    },
    // 上拉加载更多，请求更多数据
    onLoad () {
      console.log('触发了上拉加载事件')
      this.page++
      this.getList()
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
