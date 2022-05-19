<template>
  <div class="base-echart">
    <div
      class="echart"
      ref="echartDivRef"
      :style="{ width: width, height: height }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from "vue"
import { EChartsOption } from "echarts"
import useEchart from "../hooks/useEchart"

//定义props
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: "100%",
    height: "360px"
  }
)

const echartDivRef = ref<HTMLDivElement>()

onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style scoped>
.echart {
  background-color: #fff;
}
</style>
