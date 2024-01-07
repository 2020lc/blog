<template>
  <router-view />
  <vue-particles id="tsparticles" :options="options" />
</template>
<script lang="ts" setup>
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
</style>
