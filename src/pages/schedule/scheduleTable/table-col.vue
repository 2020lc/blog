<template>
  <div class="table-col">
    <div class="cell">
    </div>
  </div>
</template>
  
<script lang="ts" setup>
import { defineProps, computed } from "vue";

interface IProps {
  week: number,
  data: any[]
}
defineProps<IProps>();

</script>

<style lang="less" scoped>
.table-col {
  height: 100%;
  border: 1px solid green;
}
</style>
  