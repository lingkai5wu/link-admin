<script lang="ts" setup>
import { listUserBasicVOs } from '@/api/user'
import type { MaterialWarehouseUpdateDTO } from '@/types/api/query'
import type { UserBasicVO } from '@/types/api/vo'

const formData = defineModel<MaterialWarehouseUpdateDTO>({ default: {} })
const keeperUserOptions = ref<UserBasicVO[]>([])
listUserBasicVOs().then((data) => {
  keeperUserOptions.value = data
})
</script>

<template>
  <n-form-item label="位置" path="locationId">
    <n-input-number v-model:value="formData.locationId" />
  </n-form-item>
  <n-form-item
    :rule="{
      required: true,
      trigger: ['blur']
    }"
    label="标签"
    path="label"
  >
    <n-input v-model:value="formData.label" />
  </n-form-item>
  <n-form-item label="描述" path="description">
    <n-input v-model:value="formData.description" :autosize="{ minRows: 1 }" type="textarea" />
  </n-form-item>
  <n-form-item label="保管用户" path="keeperUserId">
    <n-select
      v-model:value="formData.keeperUserId"
      :loading="keeperUserOptions.length === 0"
      :options="keeperUserOptions"
      filterable
      label-field="phone"
      value-field="id"
    />
  </n-form-item>
  <n-form-item label="联系方式" path="contact">
    <n-input v-model:value="formData.contact" :autosize="{ minRows: 1 }" type="textarea" />
  </n-form-item>
</template>
