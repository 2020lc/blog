<template>
  <div class="schedule-home">
    <ScheduleHeader :termInformation="termInformation" @onSearchOverallWeek="handleSearchOverallWeek"
      @onRestore="handleRestore" />
    <br />
    <ScheduleTable :termInformation="termInformation" />
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, h, onBeforeUnmount, nextTick } from "vue";
import dayjs from "dayjs";
import { ElMessageBox } from 'element-plus';
import GoddessesDay from "@/component/goddesses-day.vue";
import ScheduleHeader from "./schedule-header.vue";
import ScheduleTable from "./scheduleTable/table-index.vue";
import { ITermInformation } from "@/types/schedule";

const termInformation: Ref<ITermInformation> = ref({
  beginDate: dayjs("2025-02-17"),
  curDate: dayjs(),
  overallWeek: 0,
  isOddWeek: true,
});
const timer = setInterval(() => {
  const { beginDate, curDate } = termInformation.value;
  termInformation.value.curDate = curDate.add(1, "second");
  const diffWeek = curDate.diff(beginDate, "week") + 1;
  termInformation.value.overallWeek = diffWeek;
  termInformation.value.isOddWeek = Boolean(diffWeek % 2);
}, 1000);

const handleSearchOverallWeek = (newOverallWeek: number, step = 0) => {
  const handleWeek = Number(newOverallWeek) + step;
  if (handleWeek <= 0) {
    return;
  }
  const { beginDate, curDate } = termInformation.value;
  const addDay = curDate.day() || 7;
  const newDate = dayjs(beginDate).add(handleWeek - 1, "week").add(addDay - 1, 'day');
  termInformation.value.curDate = newDate.set('h', curDate.hour()).set('m', curDate.minute()).set('s', curDate.second());
};
const handleRestore = () => {
  termInformation.value.curDate = dayjs();
};

onBeforeUnmount(() => {
  clearInterval(timer);
});
nextTick(() => {
  const { curDate } = termInformation.value;
  if (curDate.format('MM-DD') === '03-08') {
    ElMessageBox({
      title: '宝宝女神节快乐^o^',
      message: h(GoddessesDay),
      showCancelButton: false,
      center: true,
      showClose: false,
      closeOnClickModal: false,
      confirmButtonText: '宝宝真棒',
      customStyle: {
        width: '300px'
      }
    })
  }
})
</script>

<style lang="less" scoped></style>
