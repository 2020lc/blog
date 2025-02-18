<template>
  <div class="table-col">
    <template v-if="showCourse">
      <div>{{ showCourse.name }}</div>
      <div>{{ `(${showCourse.location})` }}</div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from "vue";
import { ISchedule } from "@/types/schedule";

interface IProps {
  row: any;
  scheduleInfo: ISchedule;
  week: number;
}
const props = defineProps<IProps>();

const showCourse = computed(() => {
  const { termWeek } = props.scheduleInfo;
  const row = props.row;
  if (!row || !termWeek) {
    return "";
  }
  let useCourse = row.find((course: any) => {
    const target = course.selectDateInfo.find(
      (item: any) => item.week === props.week
    );
    const { startWeek, endWeek } = target;
    const isBegin = termWeek >= startWeek;
    const noEnd = termWeek <= (endWeek || 99);
    return isBegin && noEnd;
  });
  if (!useCourse) {
    return "";
  }
  const { oddEven } = useCourse.selectDateInfo.find(
    (item: any) => item.week === props.week
  );
  if (oddEven === "normal") {
    return useCourse;
  }
  if (oddEven === "odd" && termWeek % 2 === 1) {
    return useCourse;
  }
  if (oddEven === "even" && termWeek % 2 === 0) {
    return useCourse;
  }
  return "";
});
</script>

<style lang="less" scoped>
.table-col {
  text-align: center;
}
</style>
