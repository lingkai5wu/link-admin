<script lang="ts" setup>
import { saveArea } from '@/api/area'
import type { AreaSaveDTO } from '@/types/api/query'

const formData = ref<AreaSaveDTO>({})
</script>

<template>
  <DataTableForm v-model="formData" :func="saveArea">
    <AreaBase v-model="formData" />
  </DataTableForm>
</template>
