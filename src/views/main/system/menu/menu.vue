<template>
  <div class="menu">
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="menu"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { contentTableConfig } from "./config/content.config"

import pageContent from "@/components/page-content"

export default defineComponent({
  name: "hy-menu",
  components: {
    pageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
