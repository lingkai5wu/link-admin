<script lang="ts" setup>
import { updateAnimalCategory } from '@/api/animal-category'
import type { CategoryUpdateDTO } from '@/types/api/query'
import type { CategoryVO } from '@/types/api/vo'

const props = defineProps<{
  row: CategoryVO
}>()

const formData = ref<CategoryUpdateDTO>(props.row)
</script>

<template>
  <DataTableForm v-model="formData" :func="updateAnimalCategory">
    <CategoryBase v-model="formData" />
  </DataTableForm>
</template>
