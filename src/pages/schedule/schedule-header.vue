<template>
  <div class="schedule-header">
    <h1>2025年春季课程表</h1>
    <section>
      <div class="row">
        <span>{{ formatDate.date }}</span>
        <span>{{ formatDate.curWeek }}</span>
        <span> {{ formatDate.overallWeek }}</span>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";
import { weekMap } from "@/constant/date";
import { ITermInformation } from "@/types/schedule";
interface IProps {
  termInformation: ITermInformation;
}
const props = defineProps<IProps>();

const formatDate = computed(() => {
  const { curDate, overallWeek } = props.termInformation;
  return {
    date: curDate.format("YYYY-MM-DD HH:mm:ss"),
    curWeek: weekMap[curDate.day()],
    overallWeek: `本学期第${overallWeek}周`,
  };
});
</script>

<style lang="less" scoped>
.schedule-header {
  .row {
    font-size: 1.25rem;
    font-weight: bold;
    color: @secondaryText;
    span + span {
      margin-left: 8px;
    }
  }
}
</style>
