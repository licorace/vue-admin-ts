<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <component :is="isFold ? 'fold' : 'expand'"></component>
    </el-icon>
    <!-- <el-icon><Camera /></el-icon> -->
    <div class="content">
      <hy-breadcrumb :breadcrumbs="breadcrumbs"></hy-breadcrumb>
      <user-info></user-info>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import UserInfo from "./user-info.vue"
import HyBreadcrumb from "@/base-ui/breadcrumb"

import { useStore } from "@/store"
import { useRoute } from "vue-router"
import { pathMapBreadcrumbs } from "@/utils/map-menus"

export default defineComponent({
  components: {
    UserInfo,
    HyBreadcrumb
  },
  emits: ["foldChange"],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit("foldChange", isFold.value)
    }

    //store
    const store = useStore()

    //router

    //面包屑的数据:[{name:,path:}]
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.userMenus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })

    return {
      isFold,
      handleFoldClick,
      breadcrumbs
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  // height: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
