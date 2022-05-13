<template>
  <el-form
    label-width="60px"
    :rules="rules"
    :model="phone"
    hide-required-asterisk
  >
    <el-form-item label="手机号" size="large" prop="num">
      <el-input v-model="phone.num" />
    </el-form-item>
    <el-form-item label="验证码" size="large" prop="code">
      <div class="get-code">
        <el-input v-model="phone.code" />
        <el-button type="primary" class="get-btn" @click="getcode"
          >获取验证码</el-button
        >
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

import { rules } from '../config/phone-config'

export default defineComponent({
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })

    const getcode = () => {
      let str = ''
      for (let i = 0; i < 6; i++) {
        str += Math.floor(Math.random() * 10)
      }
      alert(str)
    }
    return {
      phone,
      rules,
      getcode
    }
  }
})
</script>

<style scoped>
.get-code {
  display: flex;
}
.get-btn {
  margin-left: 8px;
}
</style>
