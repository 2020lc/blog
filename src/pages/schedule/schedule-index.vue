<template>
  <div class="schedule-home">
    <ScheduleHeader :scheduleInfo="scheduleInfo" />
    <br />
    <ScheduleTable :scheduleInfo="scheduleInfo" />
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, onBeforeUnmount } from "vue";
import dayjs from "dayjs";
import ScheduleHeader from "./schedule-header.vue";
import ScheduleTable from "./scheduleTable/table-index.vue";
import { ISchedule } from "@/types/schedule";

const scheduleInfo: Ref<ISchedule> = ref({
  termBeginDate: dayjs("2025-02-17"),
  curDate: dayjs(),
  termWeek: 0,
});
const timer = setInterval(() => {
  const { termBeginDate, curDate } = scheduleInfo.value;
  scheduleInfo.value.curDate = curDate.add(1, "second");
  const diffWeek = curDate.diff(termBeginDate, "week") + 1;
  scheduleInfo.value.termWeek = diffWeek;
}, 1000);

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<style lang="less" scoped></style>
