<script lang="ts" setup>
import { saveMaterialCategory } from '@/api/material-category'
import type { CategorySaveDTO } from '@/types/api/query'

const formData = ref<CategorySaveDTO>({})
</script>

<template>
  <DataTableForm v-model="formData" :func="saveMaterialCategory">
    <CategoryBase v-model="formData" />
  </DataTableForm>
</template>
