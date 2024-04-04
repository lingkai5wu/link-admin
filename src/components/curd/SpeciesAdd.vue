<script lang="ts" setup>
import { saveSpecies } from '@/api/species'
import type { SpeciesSaveDTO } from '@/types/api/query'

const formData = ref<SpeciesSaveDTO>({})
</script>

<template>
  <DataTableForm v-model="formData" :func="saveSpecies">
    <SpeciesBase v-model="formData" />
  </DataTableForm>
</template>
