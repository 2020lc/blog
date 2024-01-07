<template>
  <div class="nav-container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#a29bfe"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <el-menu-item index="1">首页</el-menu-item>
      <el-sub-menu index="2">
        <template #title>前端工程</template>
        <el-menu-item index="2-1">Html</el-menu-item>
        <el-menu-item index="2-2">Css</el-menu-item>
        <el-menu-item index="2-3">Javascript</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const activeIndex = ref('1');
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style lang="less" scoped>
.nav-container {
}
</style>
