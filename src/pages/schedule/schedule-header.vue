<template>
  <div class="schedule-header">
    <h2>2025年春季课程表</h2>
    <section>
      <div class="row">
        <span>{{ formatDate.date }}</span>
        <span>{{ formatDate.curWeek }}</span>
        <div class="term-wrapper">
          <div class="flex-block">
            <span>本学期第</span>
            <div class="term">
              <el-icon @click="() => emits('onSearchOverallWeek', customOverallWeek, -1)">
                <ArrowLeft />
              </el-icon>
              <el-input v-model="customOverallWeek" maxlength="2" @change="handleCustomOverallWeek" size="small"
                style="width: 28px" />
              <el-icon>
                <ArrowRight @click="() => emits('onSearchOverallWeek', customOverallWeek, 1)" />
              </el-icon>
            </div>
            <span>周</span>
          </div>
          <div class="operate-box">
            <el-icon @click="emits('onRestore')">
              <Refresh />
            </el-icon>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, Ref, computed, watch } from "vue";
import { ArrowLeft, ArrowRight, Refresh } from "@element-plus/icons-vue";
import { weekMap } from "@/constant/date";
import { ITermInformation } from "@/types/schedule";

interface IProps {
  termInformation: ITermInformation;
}
const props = defineProps<IProps>();
const emits = defineEmits<{
  (e: "onSearchOverallWeek", value: number, step?: number): void;
  (e: "onRestore", value: void): void;
}>();

const customOverallWeek: Ref<string> = ref('0');
const formatDate = computed(() => {
  const { curDate, overallWeek } = props.termInformation;
  return {
    date: curDate.format("YYYY-MM-DD HH:mm:ss"),
    curWeek: weekMap[curDate.day()],
    overallWeek
  }
});
watch(
  () => props.termInformation.overallWeek,
  (overallWeek) => {
    if (overallWeek !== Number(customOverallWeek.value)) {
      customOverallWeek.value = String(overallWeek).padStart(2, '0');
    }
  },
  { immediate: true }
);

const handleCustomOverallWeek = (val: string) => {
  if (Object.is(NaN, Number(val))) {
    emits('onRestore');
    return;
  }
  const numVal = Number(val) < 0 ? 1 : Number(val);
  emits('onSearchOverallWeek', numVal, 0);
}
</script>

<style lang="less" scoped>
.schedule-header {
  .row {
    font-size: 1.25rem;
    font-weight: bold;
    color: @secondaryText;

    span+span {
      margin-left: 8px;
    }

    .item {
      font-weight: normal;

      &+.item {
        margin-left: 0.75rem;
      }

      .whiteText {
        color: #fff;
      }

      .blackText {
        color: #000;
      }
    }
  }

  .term-wrapper {
    margin-top: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-block {
    display: flex;
  }

  .term {
    display: flex;
    align-items: center;

    .el-icon:hover {
      cursor: pointer;
      opacity: .8;
    }

    .el-input {
      ::v-deep(.el-input__wrapper) {
        background-color: #000;
        box-shadow: none;

        input {
          color: #fff;
        }
      }
    }
  }

  .operate-box {
    display: flex;
    align-items: center;
    margin-left: 8px;

    .el-icon:hover {
      cursor: pointer;
      opacity: .8;
    }
  }
}
</style>
