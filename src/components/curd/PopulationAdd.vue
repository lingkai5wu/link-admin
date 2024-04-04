<script lang="ts" setup>
import { savePopulation } from '@/api/population'
import type { PopulationSaveDTO } from '@/types/api/query'

const formData = ref<PopulationSaveDTO>({})
</script>

<template>
  <DataTableForm v-model="formData" :func="savePopulation">
    <PopulationBase v-model="formData" />
  </DataTableForm>
</template>
