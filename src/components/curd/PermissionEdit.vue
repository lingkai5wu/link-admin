<script lang="ts" setup>
import { updatePermission } from '@/api/permission'
import type { PermissionUpdateDTO } from '@/types/api/query'
import type { PermissionVO } from '@/types/api/vo'
import { pick } from '@/utils/common'

const props = defineProps<{
  row: PermissionVO
}>()

const formData = ref<PermissionUpdateDTO>(pick(props.row, ['id', 'description']))
</script>

<template>
  <DataTableForm v-model="formData" :func="updatePermission">
    <n-form-item label="权限编码">
      <n-input :value="row.code" disabled />
    </n-form-item>
    <n-form-item label="描述">
      <n-input v-model:value="formData.description" />
    </n-form-item>
  </DataTableForm>
</template>
