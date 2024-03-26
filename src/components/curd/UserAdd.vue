<script lang="ts" setup>
import { saveUser } from '@/api/user'
import type { UserSaveDTO } from '@/types/api/query'
import type { FormItemRule } from 'naive-ui'

const formData = ref<UserSaveDTO>({
  status: 'CONFIRMED'
})
</script>

<template>
  <DataTableForm v-model="formData" :func="saveUser">
    <n-form-item
      :rule="{
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
      }"
      label="手机号"
      path="phone"
    >
      <n-input v-model:value="formData.phone" />
    </n-form-item>
    <UserBase v-model="formData" />
  </DataTableForm>
</template>
