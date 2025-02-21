<template>
  <div class="schedule-home">
    <ScheduleHeader :termInformation="termInformation" />
    <br />
    <ScheduleTable :termInformation="termInformation" />
  </div>
</template>

<script lang="ts" setup>
import { ref, Ref, onBeforeUnmount } from "vue";
import dayjs from "dayjs";
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

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<style lang="less" scoped></style>
