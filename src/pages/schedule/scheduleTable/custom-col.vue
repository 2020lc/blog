<template>
  <div class="table-col">
    <template v-if="showCourse && showCourse.use">
      <div>{{ showCourse.name }}</div>
      <div>{{ `(${showCourse.location})` }}</div>
      <div v-if="showCourse.isExam" class="exam-label">结课考试</div>
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
  row: any;
}
const props = defineProps<IProps>();

const showCourse = computed(() => {
  const { termInformation, courseList, inWeek, row } = props;
  const { overallWeek, isOddWeek } = termInformation || {};
  if (!courseList || !overallWeek) {
    return "";
  }
  let isExam = false;
  let use = false;
  const ans = courseList.find((course) => {
    const target = course.courseArrangementList.find((item) => {
      const inWeekMatch = item.inWeek === inWeek;
      const { startWeek, endWeek } = item;
      const startClass = overallWeek >= startWeek;
      const noEndClass = overallWeek <= (endWeek || 99);
      const findInterval = startClass && noEndClass;
      switch (item.oddEven) {
        case OddEvenWeekEnum.Normal:
          return inWeekMatch && findInterval;
        case OddEvenWeekEnum.Odd:
          return inWeekMatch && isOddWeek && findInterval;
        case OddEvenWeekEnum.Even:
          return inWeekMatch && !isOddWeek && findInterval;
        default:
          return false;
      }
    });
    if (!target) {
      return false;
    }
    isExam = overallWeek === target.examWeek;
    use = target.startTime <= row.time;
    return true;
  });
  return ans ? { ...ans, isExam, use } : undefined;
});
</script>

<style lang="less" scoped>
.table-col {
  text-align: center;
}
.exam-label {
  color: red;
}
</style>
