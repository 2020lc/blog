<template>
    <el-table
      v-if="termWeek"
      :data="tableData"
      :span-method="objectSpanMethod"
      :border="true"
    >
      <el-table-column prop="time" label="时间" width="80" />
      <el-table-column v-for="week in weeks" :label="weekMap[week]" :key="week" >
        <template #default="scope">
          <CustomCol :row="scope.row[week]" :scheduleInfo="scheduleInfo" :week="week" />
        </template>
    </el-table-column>
    </el-table>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
import CustomCol from "./custom-col.vue";
import { ISchedule } from '@/types/schedule';
import { allSelectCourse } from '@/db/schedule';

interface IProps {
  scheduleInfo: ISchedule
}
const props = defineProps<IProps>();

const times = ['08:00', '09:40', '10:00', '11:40', '14:00', '15:40', '16:00', '17:40', '18:30', '20:30'];
const weeks = [1,2,3,4,5,6,7];
const weekMap: any = {
  1: '周一',
  2: '周二',
  3: '周三',
  4: '周四',
  5: '周五',
  6: '周六',
  7: '周日'
}

const insertData = (obj:any, course: any, selectInfo: any, dtime: string, count = 1) => {
  const { week, nodes } = selectInfo;
  const beginIndex = times.findIndex(time => time === dtime);
  if (!obj[dtime]) {
    obj[dtime] = {time: dtime, [week]: [course]};
    if (count < nodes) {
      const nextTime = times[beginIndex + count];
      insertData(obj, course, selectInfo, nextTime, count + 1);
    }
    return;
  }
  const targetWeekObj = obj[dtime][week];
  if (targetWeekObj) {
    targetWeekObj.push(course);
  } else {
    obj[dtime][week] = [course];
  }

  if (count < nodes) {
    const nextTime = times[beginIndex + count];
    insertData(obj, course, selectInfo, nextTime, count + 1);
  }

}

const getTableData = () => {
  const ans:any = {};
  allSelectCourse.map(course => {
    course.selectDateInfo.map(selectInfo => {
      insertData(ans,course, selectInfo, selectInfo.startTime);
    })
  });
  return times.map(time => {
    if (ans[time]) {
      return ans[time];
    }
    return {time};
  });
}
const tableData = getTableData();
console.log(tableData);

const termWeek = computed(() => props.scheduleInfo.termWeek);
const objectSpanMethod = ({row, columnIndex}: any ) => {
  const rowData = row[columnIndex];
  const defaultVal = [1, 1];
  return defaultVal;
  // if (!rowData) {
  //   return defaultVal;
  // }
  // let useCourse = rowData.find((course: any) => {
  //   const target = course.selectDateInfo.find((item:any) => item.week === columnIndex);
  //   const { startWeek, endWeek } = target;
  //   const isBegin = termWeek.value >= startWeek;
  //   const noEnd = termWeek.value <= (endWeek || 99);
  //   return isBegin && noEnd;
  // });
  // if (!useCourse) {
  //   return defaultVal;
  // }
  // const { nodes } =  useCourse.selectDateInfo.find((item:any) => item.week === columnIndex) || {};
  // return {
  //   rowspan: nodes || 2,
  //   colspan: 1,
  // }
}

</script>

<style lang="less" scoped>
</style>
  