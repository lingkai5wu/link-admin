<script lang="ts" setup>
import { updatePermission } from '@/api/permission'
import PermissionBase from '@/components/curd/PermissionBase.vue'
import type { PermissionUpdateDTO } from '@/types/api/query'
import type { PermissionVO } from '@/types/api/vo'
import { pick } from '@/utils/common'

const props = defineProps<{
  row: PermissionVO
}>()

const formData = ref<PermissionUpdateDTO>(pick(props.row, ['id', 'code', 'description']))
</script>

<template>
  <DataTableForm v-model="formData" :func="updatePermission">
    <PermissionBase v-model="formData" />
  </DataTableForm>
</template>
