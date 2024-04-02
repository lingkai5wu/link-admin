<script lang="ts" setup>
import { saveAnimal } from '@/api/animal'
import type { AnimalSaveDTO } from '@/types/api/query'

const formData = ref<AnimalSaveDTO>({
  status: 'NORMAL'
})
</script>

<template>
  <DataTableForm v-model="formData" :func="saveAnimal">
    <AnimalBase v-model="formData" />
  </DataTableForm>
</template>
