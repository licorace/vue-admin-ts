<template>
  <div>
    <h2>404 Not Found</h2>
    <h1>{{ $route.params.pathMatch }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
