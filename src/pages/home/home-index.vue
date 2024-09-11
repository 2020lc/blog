<template>
  <div class="home">
    <h1>小宸的博客</h1>
    <div>
      <div>2024/01/01 创建 gh-pages</div>
      <div>目的：记录所学，沉淀知识</div>
    </div>
    <div class="article-list">
      <div class="article-item" v-for="item in articleList" :key="item.id">
        <div class="title">{{ item.title }}</div>
        <div class="abstract">摘要：{{ item.abstract }}</div>
        <div class="date">{{ item.date }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const articleList = [
  {
    id: 1,
    title: "下载的那些事",
    abstract: "fe下载、bff下载、下载的历史...",
    date: "2024-01-11 23:44",
  },
];
</script>

<style lang="less" scoped>
.home {
  position: relative;
  color: @lightColor;
  font-size: 14px;

  .article-list {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    display: flex;
    flex-wrap: wrap;
    width: 1100px;
    margin: 40px auto 0;
    .article-item {
      width: 240px;
      border: 1px solid;
      border-radius: 4px;
      margin: 16px;
      padding: 8px;
      .title {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 8px;
      }
      .date {
        text-align: left;
        margin-top: 8px;
      }
    }
  }
}
</style>
