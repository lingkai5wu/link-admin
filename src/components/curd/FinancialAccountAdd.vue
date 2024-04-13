<script lang="ts" setup>
import { saveFinancialAccount } from '@/api/financial-account'
import type { CategorySaveDTO } from '@/types/api/query'

const formData = ref<CategorySaveDTO>({})
</script>

<template>
  <DataTableForm v-model="formData" :func="saveFinancialAccount">
    <FinancialAccountBase v-model="formData" />
  </DataTableForm>
</template>
