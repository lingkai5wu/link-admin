<script lang="ts" setup>
import { updateMaterialCategory } from '@/api/material-category'
import type { CategoryUpdateDTO } from '@/types/api/query'
import type { CategoryVO } from '@/types/api/vo'
import { clone } from '@/utils/common'

const props = defineProps<{
  row: CategoryVO
}>()

const formData = ref<CategoryUpdateDTO>(clone(props.row))
</script>

<template>
  <DataTableForm v-model="formData" :func="updateMaterialCategory">
    <CategoryBase v-model="formData" />
  </DataTableForm>
</template>
