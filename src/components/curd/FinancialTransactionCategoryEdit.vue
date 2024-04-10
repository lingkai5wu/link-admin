<script lang="ts" setup>
import { updateFinancialTransactionCategory } from '@/api/financial-transaction-category'
import type { CategoryUpdateDTO } from '@/types/api/query'
import type { CategoryVO } from '@/types/api/vo'
import { clone } from '@/utils/common'

const props = defineProps<{
  row: CategoryVO
}>()

const formData = ref<CategoryUpdateDTO>(clone(props.row))
</script>

<template>
  <DataTableForm v-model="formData" :func="updateFinancialTransactionCategory">
    <CategoryBase v-model="formData" />
  </DataTableForm>
</template>
