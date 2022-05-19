<template>
  <div class="chat">
    <h2>chat</h2>
    <el-icon :size="22" color="#000"><IconPhAddressBook /></el-icon>
    <el-icon :size="22" color="red"><IconSystemUiconsBell /></el-icon>
    <el-icon :size="22" color="#000"><IconCodiconBell /></el-icon>
    <el-icon :size="22" color="#000"><IconIcBaseline5g /></el-icon>
    <el-icon :size="660" color="#000"><IconEmojioneV1Bell /></el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

// import IconBaseline5g from "~icons/ic/baseline-5g"

export default defineComponent({
  name: "chat",
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
