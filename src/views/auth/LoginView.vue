<script lang="ts" setup>
import { otpLogin } from '@/api/auth'
import InputSmsCode from '@/components/auth/InputSmsCode.vue'
import LoadingButton from '@/components/LoadingButton.vue'
import router from '@/router'
import { useAuthStore } from '@/stores/auth'
import type { AuthOtpLoginDTO } from '@/types/api/query'
import { initRuntimeData, sleep } from '@/utils/common'
import { LogInOutline } from '@vicons/ionicons5'
import type { FormItemRule } from 'naive-ui'

const formData = ref<AuthOtpLoginDTO>({
  phone: '18888888888',
  otp: '888888'
})
const formRules = {
  phone: [
    {
      required: true,
      validator(_: FormItemRule, value: string) {
        if (!value) {
          return new Error('请输入手机号')
        }
        if (!/^1\d{10}$/.test(value)) {
          return new Error('请输入正确的手机号')
        }
        return true
      },
      trigger: 'blur'
    }
  ],
  otp: [
    {
      required: true,
      validator(_: FormItemRule, value: string) {
        if (!value) {
          return new Error('请输入验证码')
        }
        if (!/^\d{6}$/.test(value)) {
          return new Error('请输入正确的验证码')
        }
      },
      trigger: 'blur'
    }
  ]
}
const loadingButtonRef = ref<InstanceType<typeof LoadingButton> | null>(null)

async function handleLogin() {
  const tokenInfoVO = await otpLogin(formData.value)
  const authStore = useAuthStore()
  authStore.token = tokenInfoVO
  await initRuntimeData()
  window.$message.success('登录成功')
  await router.push('/')
}
</script>

<template>
  <n-h2>登录您的账号</n-h2>
  <n-form
    ref="formRef"
    :disabled="loadingButtonRef?.isLoading"
    :model="formData"
    :rules="formRules"
  >
    <n-form-item label="手机号" path="phone">
      <n-input v-model:value="formData.phone" />
    </n-form-item>
    <n-form-item label="验证码" path="otp">
      <InputSmsCode
        v-model="formData.otp"
        :disabled="loadingButtonRef?.isLoading"
        :func="() => sleep(1000)"
        :interval="10"
      />
    </n-form-item>
    <LoadingButton
      ref="loadingButtonRef"
      :func="handleLogin"
      style="width: 100%; margin-top: 4px"
      type="primary"
    >
      <template #icon>
        <LogInOutline />
      </template>
      登录
    </LoadingButton>
  </n-form>
</template>
