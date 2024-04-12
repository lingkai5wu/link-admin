<script lang="ts" setup>
import { getMaterialMovementVO, updateMaterialMovement } from '@/api/material-movement'
import type { MaterialMovementUpdateDTO } from '@/types/api/query'
import type { MaterialMovementBasicVO } from '@/types/api/vo'

const props = defineProps<{
  row: MaterialMovementBasicVO
}>()

const formData = ref<MaterialMovementUpdateDTO>()
getMaterialMovementVO(props.row.id).then((data) => {
  formData.value = data
})
</script>

<template>
  <DataTableForm v-model="formData" :func="updateMaterialMovement">
    <MaterialMovementBase v-model="formData" />
  </DataTableForm>
</template>
