<template>
  <div class="nav-container">
    <div class="log-container"></div>
    <div class="menu-container">
      <div class="menu-item" v-for="menu in menuList" :key="menu.id">
        <router-link
          class="menu-item-link"
          :class="{ 'menu-item-link-active': currentMenu === menu.id }"
          :to="menu.path"
          @click="changeMenu(menu.id)"
          >{{ menu.name }}</router-link
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const menuList = [
  { name: '首页', path: '/', id: 1 },
  { name: '待开发', path: '/other', id: 2 },
];

const currentMenu = ref(1);
const changeMenu = (menuId: number) => {
  currentMenu.value = menuId;
};
</script>

<style lang="less" scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 64px;
  padding: 0 96px;

  .menu-container {
    display: flex;
    .menu-item {
      &:nth-child(n + 2) {
        margin-left: 16px;
      }
      .menu-item-link {
        position: relative;
        color: #fff;
        font-size: 14px;
        text-decoration: none;
        &::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: -12px;
          transform: translate(-50%);
          display: block;
          height: 2px;
          width: 24px;
          background-color: #fff;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
      }
      .menu-item-link-active {
        &::after {
          opacity: 1;
        }
      }
    }
  }
}
</style>
