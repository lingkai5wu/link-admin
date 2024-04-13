<script lang="ts" setup>
import { saveFinancialTransaction } from '@/api/financial-transaction'
import { useUserStore } from '@/stores/user'
import type { FinancialTransactionSaveDTO } from '@/types/api/query'

const formData = ref<FinancialTransactionSaveDTO>({
  date: Date.now(),
  operatorUserId: useUserStore().userVO?.id
})
</script>

<template>
  <DataTableForm v-model="formData" :func="saveFinancialTransaction">
    <FinancialTransactionBase v-model="formData" />
  </DataTableForm>
</template>
