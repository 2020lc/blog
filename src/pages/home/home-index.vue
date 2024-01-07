<template>
  <div class="home-container">
    <HomeNav />
    <HomeIntroduce ref="introduceRef" />
  </div>
</template>

<script lang="ts" setup>
import HomeNav from './home-nav.vue';
import HomeIntroduce from './home-introduce.vue';
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
  min-width: 1280px;
  background: url(../../assets/images/backgroud.jpg) no-repeat;
  background-size: cover;
}
</style>
