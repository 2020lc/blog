<template>
  <el-table class="schedule-table" max-height="500" header-cell-class-name="custom-header-cell" :data="tableData"
    :span-method="objectSpanMethod" :border="true" :cell-class-name="dynamicCellClassName" :resizable="false">
    <el-table-column label="" width="120" fixed="left" prop="time" headerAlign="center">
      <template #default="scope">
        <div class="time-box">
          <div class="index">{{ scope.$index + 1 }}</div>
          <div class="time">{{ handleTimes(scope.row.time) }}</div>
        </div>
      </template>
    </el-table-column>
    <el-table-column v-for="week in weeks" :key="week" :minWidth="150" headerAlign="center">
      <template #header>
        <div class="table-header">
          <div class="week">{{ weekMap[week] }}</div>
          <div class="date">{{ headerDate(week) }}</div>
        </div>
      </template>
      <template #default="scope">
        <CustomCol v-if="scope.row[week]" :courseList="scope.row[week]" :termInformation="termInformation"
          :inWeek="week" />
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import CustomCol from "./custom-col.vue";
import {
  ITermInformation,
  ICourseScheduleRow,
  ICourse,
  ICourseArrangementInfo,
  InWeekEnum,
  OddEvenWeekEnum,
} from "@/types/schedule";
import { selectCourseList } from "@/db/schedule";
import dayjs from "dayjs";

interface IProps {
  termInformation: ITermInformation;
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
const weeks: InWeekEnum[] = [1, 2, 3, 4, 5, 6, 7];
const weekMap: Record<InWeekEnum, string> = {
  1: "周一",
  2: "周二",
  3: "周三",
  4: "周四",
  5: "周五",
  6: "周六",
  7: "周日",
};
const curWeek = props.termInformation.curDate.day() || 7;

const insertTimeByCourse = (
  row: Record<string, ICourseScheduleRow>,
  course: ICourse,
  courseArrangement: ICourseArrangementInfo,
  dTime: string,
  count = 1
) => {
  const { inWeek, nodes } = courseArrangement;
  const dTimeIndex = times.findIndex((time) => time === dTime);
  if (!row[dTime]) {
    row[dTime] = { time: dTime, [inWeek]: [course] };
    if (count < nodes) {
      const nextTime = times[dTimeIndex + 1];
      insertTimeByCourse(row, course, courseArrangement, nextTime, count + 1);
    }
    return;
  }
  const courseList = row[dTime][inWeek];
  if (courseList) {
    courseList.push(course);
  } else {
    row[dTime][inWeek] = [course];
  }

  if (count < nodes) {
    const nextTime = times[dTimeIndex + 1];
    insertTimeByCourse(row, course, courseArrangement, nextTime, count + 1);
  }
};
function getTableData() {
  const timeByCourseScheduleRow: Record<string, ICourseScheduleRow> = {};
  selectCourseList.map((course) => {
    course.courseArrangementList.map((courseArrangement) => {
      insertTimeByCourse(
        timeByCourseScheduleRow,
        course,
        courseArrangement,
        courseArrangement.startTime
      );
    });
  });
  return times.map((time) => {
    if (timeByCourseScheduleRow[time]) {
      return timeByCourseScheduleRow[time];
    }
    return { time };
  });
};
const tableData: ICourseScheduleRow[] = getTableData();

const objectSpanMethod = ({
  row,
  columnIndex: inWeek,
}: {
  row: ICourseScheduleRow;
  columnIndex: InWeekEnum;
}) => {
  const { overallWeek, isOddWeek } = props.termInformation;
  const courseList: ICourse[] = row[inWeek] || [];
  const defaultObjectSpan = [1, 1];
  if (!courseList.length) {
    return defaultObjectSpan;
  }
  const useCourse = courseList.find((course) => {
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
  if (!useCourse) {
    return defaultObjectSpan;
  }
  const useArrangement = useCourse.courseArrangementList.find((item) => {
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
  if (!useArrangement) {
    return defaultObjectSpan;
  }
  return {
    rowspan: row.time === useArrangement.startTime ? useArrangement.nodes : 0,
    colspan: 1,
  };
};

const dynamicCellClassName = ({ columnIndex }: { columnIndex: InWeekEnum }) => {
  let className = "custom-cell";
  if (curWeek === columnIndex) {
    className += " hight-light";
  }
  return className;
};
const handleTimes = (time: string) => {
  const [hour, minute] = time.split(":");
  let date = dayjs().hour(+hour).minute(+minute);
  date = date.add(45, "minute");
  return `${time} - ${date.format("HH:mm")}`;
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

const headerDate = (week: number) => {
  const increment = week - curWeek;
  const absIncrment = Math.abs(increment);
  const date = dayjs(props.termInformation.curDate);
  if (increment < 0) {
    return date.subtract(absIncrment, 'day').format('MM-DD');
  }
  return date.add(absIncrment, 'day').format('MM-DD');
}

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

.table-header {
  .week {
    font-size: 1.25rem;
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

    .el-table__cell {
      padding: 0;
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
