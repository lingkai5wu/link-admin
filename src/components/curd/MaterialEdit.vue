<script lang="ts" setup>
import { getMaterialVO, updateMaterial } from '@/api/material'
import type { MaterialUpdateDTO } from '@/types/api/query'
import type { MaterialBasicVO } from '@/types/api/vo'

const props = defineProps<{
  row: MaterialBasicVO
}>()

const formData = ref<MaterialUpdateDTO>()
getMaterialVO(props.row.id).then((data) => {
  formData.value = data
})
</script>

<template>
  <DataTableForm v-model="formData" :func="updateMaterial">
    <MaterialBase v-model="formData" />
  </DataTableForm>
</template>
