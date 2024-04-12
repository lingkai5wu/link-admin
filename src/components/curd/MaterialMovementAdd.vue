<script lang="ts" setup>
import { saveMaterialMovement } from '@/api/material-movement'
import { useUserStore } from '@/stores/user'
import type { MaterialMovementSaveDTO } from '@/types/api/query'

const formData = ref<MaterialMovementSaveDTO>({
  status: 'APPROVED',
  operatorUserId: useUserStore().userVO?.id,
  quantity: 0
})
</script>

<template>
  <DataTableForm v-model="formData" :func="saveMaterialMovement">
    <MaterialMovementBase v-model="formData" />
  </DataTableForm>
</template>
