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
import { ITermInformation, ICourse, OddEvenWeekEnum } from "@/types/schedule";

interface IProps {
  termInformation: ITermInformation;
  courseList: ICourse[];
  inWeek: number;
}
const props = defineProps<IProps>();

const showCourse = computed(() => {
  const { termInformation, courseList, inWeek } = props;
  const { overallWeek, isOddWeek } = termInformation || {};
  if (!courseList || !overallWeek) {
    return "";
  }
  return courseList.find((course) => {
    const target = course.courseArrangementList.find((item) => {
      const inWeekMatch = item.inWeek === inWeek;
      switch (item.oddEven) {
        case OddEvenWeekEnum.Normal:
          return inWeekMatch;
        case OddEvenWeekEnum.Odd:
          return inWeekMatch && isOddWeek;
        case OddEvenWeekEnum.Even:
          return inWeekMatch && !isOddWeek;
        default:
          return false;
      }
    });
    if (!target) {
      return false;
    }
    const { startWeek, endWeek } = target;
    const startClass = overallWeek >= startWeek;
    const noEndClass = overallWeek <= (endWeek || 99);
    return startClass && noEndClass;
  });
});
</script>

<style lang="less" scoped>
.table-col {
  text-align: center;
}
</style>
