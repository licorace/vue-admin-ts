<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar :size="30" :src="circleUrl"></el-avatar>
        <span class="user-name">{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="circle-close" @click="handleExitClick"
            >退出登录</el-dropdown-item
          >
          <el-dropdown-item icon="avatar" divided>用户信息</el-dropdown-item>
          <el-dropdown-item icon="setting">系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import { useStore } from "@/store"
import { useRouter } from "vue-router"
import LocalCache from "@/utils/cache"

export default defineComponent({
  setup() {
    const circleUrl = ref(
      "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    )
    const store = useStore()
    const router = useRouter()
    const name = computed(() => store.state.login.userInfo.name)
    const handleExitClick = () => {
      //这个只删token,name和password还会留着
      LocalCache.deleteCache("token")
      //这个直接清空所有localStorage
      // LocalCache.clearCache()
      router.push("/main")
    }
    return {
      circleUrl,
      name,
      handleExitClick
    }
  }
})
</script>

<style scoped lang="less">
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;

  .user-name {
    padding: 0 8px;
  }
}
</style>
