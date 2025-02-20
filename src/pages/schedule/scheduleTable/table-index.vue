<template>
  <el-table
    class="schedule-table"
    max-height="600"
    header-cell-class-name="custom-header-cell"
    highlight-current-row="false"
    :data="tableData"
    :span-method="objectSpanMethod"
    :border="true"
    :cell-class-name="dynamicCellClassName"
    :resizable="false"
  >
    <el-table-column
      label="时间"
      width="120"
      fixed="left"
      prop="time"
      headerAlign="center"
    >
      <template #default="scope">
        <div class="time-box">
          <div class="index">{{ scope.$index + 1 }}</div>
          <div class="time">{{ handleTimes(scope.row.time) }}</div>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      v-for="week in weeks"
      :label="weekMap[week]"
      :key="week"
      :minWidth="160"
      headerAlign="center"
    >
      <template #default="scope">
        <CustomCol
          :row="scope.row[week]"
          :scheduleInfo="scheduleInfo"
          :week="week"
        />
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
import CustomCol from "./custom-col.vue";
import { ISchedule } from "@/types/schedule";
import { allSelectCourse } from "@/db/schedule";
import dayjs from "dayjs";

interface IProps {
  scheduleInfo: ISchedule;
}
const props = defineProps<IProps>();

const times = [
  "08:00",
  "08:55",
  "10:00",
  "10:55",
  "14:00",
  "14:55",
  "16:00",
  "16:55",
  "18:30",
  "19:45",
];
const handleTimes = (time: string) => {
  const [hour, minute] = time.split(":");
  let date = dayjs().hour(+hour).minute(+minute);
  date = date.add(45, "minute");
  return `${time} - ${date.format("HH:mm")}`;
};
const weeks = [1, 2, 3, 4, 5, 6, 7];
const weekMap: any = {
  1: "周一",
  2: "周二",
  3: "周三",
  4: "周四",
  5: "周五",
  6: "周六",
  7: "周日",
};

const insertData = (
  obj: any,
  course: any,
  selectInfo: any,
  dtime: string,
  count = 1
) => {
  const { week, nodes } = selectInfo;
  const beginIndex = times.findIndex((time) => time === dtime);
  if (!obj[dtime]) {
    obj[dtime] = { time: dtime, [week]: [course] };
    if (count < nodes) {
      const nextTime = times[beginIndex + 1];
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
    const nextTime = times[beginIndex + 1];
    insertData(obj, course, selectInfo, nextTime, count + 1);
  }
};

const getTableData = () => {
  const ans: any = {};
  allSelectCourse.map((course) => {
    course.selectDateInfo.map((selectInfo) => {
      insertData(ans, course, selectInfo, selectInfo.startTime);
    });
  });
  return times.map((time) => {
    if (ans[time]) {
      return ans[time];
    }
    return { time };
  });
};
const tableData = getTableData();

const termWeek = computed(() => props.scheduleInfo.termWeek);
const objectSpanMethod = ({ row, rowIndex, columnIndex }: any) => {
  const cellData = row[columnIndex];
  const defaultVal = [1, 1];
  if (!cellData) {
    return defaultVal;
  }
  let useCourse = cellData.find((course: any) => {
    const target = course.selectDateInfo.find(
      (item: any) => item.week === columnIndex
    );
    const { startWeek, endWeek } = target;
    const isBegin = termWeek.value >= startWeek;
    const noEnd = termWeek.value <= (endWeek || 99);
    return isBegin && noEnd;
  });
  if (!useCourse) {
    return defaultVal;
  }
  const { nodes, startTime } =
    useCourse.selectDateInfo.find((item: any) => item.week === columnIndex) ||
    {};
  return {
    rowspan: row.time === startTime ? nodes : 0,
    colspan: 1,
  };
};

const curWeek = props.scheduleInfo.curDate.day() || 7;
const dynamicCellClassName = ({ columnIndex }: any) => {
  let className = "custom-cell";
  if (curWeek === columnIndex) {
    className += " hight-light";
  }
  return className;
};
const locateCurrentCourseCol = () => {
  const hightLightDom = document.querySelector(".hight-light");
  if (hightLightDom) {
    hightLightDom.scrollIntoView({
      behavior: "smooth",
      inline: "center",
    });
  } else {
    setTimeout(() => {
      locateCurrentCourseCol();
    }, 500);
  }
};
setTimeout(() => {
  locateCurrentCourseCol();
}, 1000);
</script>

<style lang="less" scoped>
.time-box {
  text-align: center;
  color: #fff;
  .index {
    color: #ccc;
    font-weight: bold;
  }
  .time {
    font-weight: bold;
  }
}
.schedule-table.el-table {
  font-size: 1rem;
  ::v-deep(.el-table__header-wrapper) {
    .custom-header-cell {
      color: #fff;
      background-color: #000;
    }
  }
  ::v-deep(.el-table__body-wrapper) {
    .el-table__row {
      pointer-events: none;
      color: @primaryText;
      background-color: #000;
    }
    .hight-light {
      color: @secondaryText !important;
    }
  }
}
// 滚动固定
.el-table.is-scrolling-right {
  ::v-deep(.el-table-fixed-column--left.is-last-column.el-table__cell) {
    border-right: 1px solid #fff;
  }
}
// 滚动左侧固定阴影
.el-table.is-scrolling-middle {
  ::v-deep(.el-table-fixed-column--left.is-last-column::before) {
    box-shadow: 10px 0 10px -10px #fff inset;
  }
}
</style>
