<script lang="ts" setup>
import type { AnimalUpdateDTO } from '@/types/api/query'
import { animalSexEnumConfig, animalStatusEnumConfig } from '@/utils/enum'
import { NFormItem } from 'naive-ui'

const formData = defineModel<AnimalUpdateDTO>({ default: {} })
</script>

<template>
  <n-form-item label="姓名" path="name">
    <n-input v-model:value="formData.name" />
  </n-form-item>
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
        v-for="config in animalStatusEnumConfig"
        :key="config.value"
        :label="config.label"
        :value="config.value"
      />
    </n-radio-group>
  </n-form-item>
  <n-form-item label="种群" path="populationId">
    <n-input-number v-model:value="formData.populationId" />
  </n-form-item>
  <n-form-item label="品种" path="breed">
    <n-input v-model:value="formData.breed" />
  </n-form-item>
  <n-form-item
    :rule="{
      required: true,
      trigger: ['blur']
    }"
    label="性别"
    path="sex"
  >
    <n-radio-group v-model:value="formData.sex" name="sex">
      <n-radio-button
        v-for="config in animalSexEnumConfig"
        :key="config.value"
        :label="config.label"
        :value="config.value"
      />
    </n-radio-group>
  </n-form-item>
  <n-form-item label="出生日期" path="dateOfBirth">
    <n-date-picker v-model:value="formData.dateOfBirth" />
  </n-form-item>
  <n-form-item label="颜色" path="color">
    <n-input v-model:value="formData.color" :autosize="{ minRows: 1 }" type="textarea" />
  </n-form-item>
  <n-form-item label="特征" path="feature">
    <n-input v-model:value="formData.feature" :autosize="{ minRows: 1 }" type="textarea" />
  </n-form-item>
  <n-form-item label="健康状况" path="health">
    <n-input v-model:value="formData.health" :autosize="{ minRows: 1 }" type="textarea" />
  </n-form-item>
  <n-form-item label="体重" path="weight">
    <n-input-number v-model:value="formData.weight" />
  </n-form-item>
  <n-form-item label="电子标签" path="rfid">
    <n-input v-model:value="formData.rfid" :autosize="{ minRows: 1 }" type="textarea" />
  </n-form-item>
  <SingleImageUploadFormItem v-model="formData.avatar" label="头像" path="avatar" />
  <SingleImageUploadFormItem v-model="formData.banner" label="横幅" path="banner" />
</template>
