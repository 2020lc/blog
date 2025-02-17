<template>
    <div class="schedule-header">
      <h1>2025年春季课程表</h1>
      <section>
        <div class="row">
          <span>{{ formatDate.date }}</span>
          <span>{{  formatDate.week }}</span>
          <span> {{ formatDate.termWeek }}</span>
        </div>
      </section>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps, computed } from "vue";
  import { weekMap } from '@/constant/date';
  import { ISchedule } from '@/types/schedule';
  interface IProps {
    scheduleInfo: ISchedule
  }
  const props = defineProps<IProps>();

  const formatDate = computed(() => {
    const { curDate, termWeek } = props.scheduleInfo;
    return {
      date: curDate.format('YYYY-MM-DD HH:mm:ss'),
      week: weekMap[curDate.day()],
      termWeek: `本学期第${termWeek}周`
    }
  });

  </script>
  
  <style lang="less" scoped>
  .schedule-header {
    .row {
      font-size: 16px;
      font-weight: bold;
      color: @secondaryText;
      span + span {
        margin-left: 8px;
      }
    }
  }
  </style>
  