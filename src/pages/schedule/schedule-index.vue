<template>
  <div class="schedule-home">
    <h1>2024年秋季课程表</h1>
    <div class="extra">
      <span>{{ curDate }}</span>
      <span>周{{ curWeek }}</span>
      <span>本学期第{{ diffWeek }}周</span>
    </div>
    <div class="container">
      <table border="1">
        <thead>
          <tr>
            <th v-for="item in tableHead" :key="item">{{ item }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in telTableData" :key="rowIndex">
            <td
              v-for="(col, colIndex) in row"
              :class="{ headCol: colIndex === 0 }"
              :key="rowIndex + colIndex"
            >
              {{ col }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
import { ref, computed, onBeforeUnmount } from "vue";

let date = dayjs();
const tableHead = ref([
  "/",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Times",
]);
const diffWeek = computed(() => {
  const termBeginsDay = dayjs("2024/09/02");
  const curDay = dayjs();
  return curDay.diff(termBeginsDay, "week") + 1;
});
const weekMap: Record<string, string> = {
  1: "一",
  2: "二",
  3: "三",
  4: "四",
  5: "五",
  6: "六",
  7: "日",
};
const curWeek = computed(() => {
  const week = date.get("day").toString();
  return weekMap[week];
});

const tableData = [
  ["第一节", "第二节", "第三节", "第四节", "选修"],
  ["毛概", "传播策划", "新媒体概论"],
  ["", "媒介经营管理", "", ""],
  ["新闻摄影", "", "消息写作学", ""],
  [
    "",
    "英语",
    "中外新闻实务",
    "广播电视学",
    diffWeek.value % 2 === 1 ? "影视艺术鉴赏（选）" : "",
  ],
  ["", "", "社会心理学", "纪录片创作与研究"],
  [],
  [],
  [
    "08:00 - 09:40",
    "10:00 - 11:40",
    "14:00 - 15.40",
    "16:00 - 17:40",
    "18:30 - 20:30",
  ],
];
const telTableData = computed(() => {
  const ans: any = [];
  tableData.forEach((headItem, i) => {
    headItem.forEach((cellItem, j) => {
      if (!ans[j]) {
        ans[j] = [];
      }
      ans[j][i] = cellItem;
    });
  });
  return ans;
});
const times = ref<number>();
const curDate = ref(date.format("YYYY-MM-DD HH:mm:ss"));
const beginTiming = () => {
  times.value = setInterval(() => {
    date = date.add(1, "second");
    curDate.value = date.format("YYYY-MM-DD HH:mm:ss");
  }, 1000);
};
beginTiming();

onBeforeUnmount(() => {
  clearInterval(times.value);
});
</script>

<style lang="less" scoped>
.schedule-home {
  margin: auto;
  font-size: 14px;
  overflow: scroll;
  .extra {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 12px;
    color: @secondaryText;
    span {
      margin-right: 8px;
    }
  }
  .container {
    overflow: scroll;
  }
  table {
    border-collapse: collapse;
    margin: auto;
    th,
    td {
      width: 120px;
      height: 40px;
      padding: 8px;
    }
    td {
      color: @primaryText;
      min-width: 100px;
    }
    .headCol {
      color: #fff;
    }
  }
}
</style>
