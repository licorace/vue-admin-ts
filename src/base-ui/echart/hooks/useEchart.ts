import * as echarts from "echarts"

import ChinaMapData from "../data/china.json"

echarts.registerMap("china", ChinaMapData)

export default function (el: HTMLDivElement, theme = "light") {
  //初始化echarts
  const echartInstance = echarts.init(el, theme, { renderer: "svg" })

  // 设置options
  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }

  const updateSize = () => {
    echartInstance.resize()
  }

  // 监听window尺寸的变化
  window.addEventListener("resize", () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOptions,
    updateSize
  }
}
