<template>
  <div>
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{ title }}</span>
          <!-- 单张图片 -->
          <img :src="imgsrc1" alt="" class="thumb" />
        </div>
        <!-- 三张图片 -->
        <!-- <div class="thumb-box">
          <img :src="imgsrc1" alt="" class="thumb" />
          <img :src="imgsrc2" alt="" class="thumb" />
          <img :src="imgsrc3" alt="" class="thumb" />
        </div> -->
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span
            >{{ author }} &nbsp;&nbsp; {{ comments }}评论 &nbsp;&nbsp; 发布日期
            {{ publishdate }}</span
          >
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArticleInfor',
  props: {
    title: {
      type: String,
      default: ''
    },
    imgsrc1: {
      type: String,
      default: ''
    },
    author: {
      type: String,
      default: ''
    },
    comments: {
      type: String,
      default: '0'
    },
    publishdate: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
