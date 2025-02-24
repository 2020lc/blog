<template>
  <div class="schedule-header">
    <h1>2025年春季课程表</h1>
    <section>
      <div class="row">
        <span>{{ formatDate.date }}</span>
        <span>{{ formatDate.curWeek }}</span>
        <span> {{ formatDate.overallWeek }}</span>
      </div>
      <div class="row row-right">
        <div class="item">
          <el-input v-model="customOverallWeek" style="width: 100px">
            <template #append>
              <el-button
                class="blackText"
                :icon="Search"
                @click="() => emits('onSearchOverallWeek', customOverallWeek)"
              />
            </template>
          </el-input>
        </div>
        <div class="item">
          <el-button
            class="blackText"
            :icon="Refresh"
            @click="emits('onRestore')"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, ref, computed, watch } from "vue";
import { Search, Refresh } from "@element-plus/icons-vue";
import { weekMap } from "@/constant/date";
import { ITermInformation } from "@/types/schedule";

interface IProps {
  termInformation: ITermInformation;
}
const props = defineProps<IProps>();
const emits = defineEmits<{
  (e: "onSearchOverallWeek", value: number): void;
  (e: "onRestore", value: void): void;
}>();

const customOverallWeek = ref(0);
const formatDate = computed(() => {
  const { curDate, overallWeek } = props.termInformation;
  return {
    date: curDate.format("YYYY-MM-DD HH:mm:ss"),
    curWeek: weekMap[curDate.day()],
    overallWeek: `本学期第${overallWeek}周`,
  };
});
watch(
  () => props.termInformation.overallWeek,
  (overallWeek) => {
    if (overallWeek) {
      customOverallWeek.value = overallWeek;
    }
  },
  { immediate: true }
);
</script>

<style lang="less" scoped>
.schedule-header {
  .row {
    font-size: 1.25rem;
    font-weight: bold;
    color: @secondaryText;
    display: flex;
    justify-content: center;
    span + span {
      margin-left: 8px;
    }
    .item {
      font-weight: normal;
      & + .item {
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
  .row-right {
    justify-content: right;
  }
}
</style>
