<template>
  <div class="app-container">
    <vue-particles id="tsparticles" :options="options" />
    <HomeNav />
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script lang="ts" setup>
import HomeNav from '@/pages/home/home-nav.vue';
import { options } from '@/constant/plugins/tsparticles';
</script>
<style>
html,
body,
#app {
  height: 100%;
}
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.app-container {
  height: 100%;
  min-width: 1280px;
  background: url(./assets/images/backgroud.jpg) no-repeat;
  background-size: cover;
}
</style>
