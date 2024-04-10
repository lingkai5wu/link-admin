<script lang="ts" setup>
import { saveAnimalCategory } from '@/api/animal-category'
import type { CategorySaveDTO } from '@/types/api/query'

const formData = ref<CategorySaveDTO>({})
</script>

<template>
  <DataTableForm v-model="formData" :func="saveAnimalCategory">
    <CategoryBase v-model="formData" />
  </DataTableForm>
</template>
