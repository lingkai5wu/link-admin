<script lang="ts" setup>
import InputSmsCode from '@/components/auth/InputSmsCode.vue'
import LoadingButton from '@/components/LoadingButton.vue'
import { sleep } from '@/utils/common'

async function handleLogin() {
  window.$message.info('模拟登录')
  await sleep(1000)
  window.$message.success('登录成功')
}
</script>

<template>
  <n-form ref="formRef">
    <n-form-item label="手机号" path="phoneNumber">
      <n-input />
    </n-form-item>
    <n-form-item label="图形验证码" path="captchaCode">
      <n-input />
    </n-form-item>
    <n-form-item label="短信验证码" path="smsCode">
      <InputSmsCode :func="() => sleep(1000)" :interval="10" />
    </n-form-item>
    <n-flex>
      <LoadingButton :func="handleLogin" style="width: 100%" type="primary">登录</LoadingButton>
    </n-flex>
  </n-form>
</template>
