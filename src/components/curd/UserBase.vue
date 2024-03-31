<script lang="ts" setup>
import type { UserUpdateDTO } from '@/types/api/query'
import { userSexEnumConfig, userStatusEnumConfig } from '@/utils/enum'
import { NFormItem } from 'naive-ui'

const formData = defineModel<UserUpdateDTO>({ required: true })
</script>

<template>
  <n-form-item
    :rule="{
      required: true,
      trigger: ['blur']
    }"
    label="状态"
    path="status"
  >
    <n-radio-group v-model:value="formData.status" name="status">
      <n-radio-button
        v-for="config in userStatusEnumConfig"
        :key="config.value"
        :label="config.label"
        :value="config.value"
      />
    </n-radio-group>
  </n-form-item>
  <n-form-item label="昵称" path="nickname">
    <n-input v-model:value="formData.nickname" />
  </n-form-item>
  <n-form-item label="姓名" path="realname">
    <n-input v-model:value="formData.realname" />
  </n-form-item>
  <SingleImageUploadFormItem v-model="formData.avatar" label="头像" path="avatar" />
  <n-form-item label="性别" path="sex">
    <n-select v-model:value="formData.sex" :options="userSexEnumConfig" />
  </n-form-item>
</template>
