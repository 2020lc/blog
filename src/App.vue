<template>
  <div class="app-container">
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup></script>
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
  min-width: 320px;
  background-size: cover;
  overflow: hidden;
  background-color: #000;
  color: #fff;
}
</style>
