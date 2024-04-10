<script lang="ts" setup>
import { saveFinancialTransactionCategory } from '@/api/financial-transaction-category'
import type { CategorySaveDTO } from '@/types/api/query'

const formData = ref<CategorySaveDTO>({})
</script>

<template>
  <DataTableForm v-model="formData" :func="saveFinancialTransactionCategory">
    <CategoryBase v-model="formData" />
  </DataTableForm>
</template>
