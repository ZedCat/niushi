<template>
  <div class="home-container">
    <!-- 头部标题 -->
    <van-nav-bar title="牛事" fixed />

    <ArticleInfor
      v-for="item in newsList"
      :key="item.uniquekey"
      :title="item.title"
      :imgsrc1="item.thumbnail_pic_s"
      :imgsrc2="item.thumbnail_pic_s02"
      :imgsrc3="item.thumbnail_pic_s03"
      :author="item.author_name"
      :comments="item.is_content"
      :publishdate="item.date"
      :urt="item.url"
    ></ArticleInfor>
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
