<template>
  <div class="rose-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue"
import BaseEchart from "@/base-ui/echart"
import { IPieEchartData } from "../types"

const props = defineProps<{
  roseData: IPieEchartData
}>()

const options = computed(() => {
  return {
    // legend: {
    //   top: 'bottom'
    // },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: false },
        saveAsImage: { show: true }
      }
    },
    tooltip: {
      trigger: "item"
    },
    series: [
      {
        name: "分类数据",
        type: "pie",
        radius: [10, 160],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData,
        label: {
          show: false
        }
      }
    ]
  }
})
</script>

<style scoped></style>
