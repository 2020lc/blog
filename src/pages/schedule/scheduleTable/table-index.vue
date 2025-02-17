<template>
    <div class="schedule-table">
      <div class="col-item">
        <div v-for="time in times" :key="time">{{  time }}</div>
      </div>
      <div v-for="(item, week) in tableData" class="col-item" :key="week">
        <TableCol :week="week" :data="item" />
      </div>
    </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";
import TableCol from './table-col.vue';
import { ISchedule } from '@/types/schedule';
import { tableData } from '@/db/schedule';

interface IProps {
  scheduleInfo: ISchedule
}
const props = defineProps<IProps>();

const times = ['08:00', '09:40', '10:00', '11:40', '14:00', '15:40', '16:00', '17:40', '18:30', '20:30'];



</script>

<style lang="less" scoped>
.schedule-table {
  display: flex;
  border: 1px solid red;
}
</style>
  