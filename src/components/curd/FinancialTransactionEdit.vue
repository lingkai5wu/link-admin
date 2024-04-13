<script lang="ts" setup>
import { getFinancialTransactionVO, updateFinancialTransaction } from '@/api/financial-transaction'
import type { FinancialTransactionUpdateDTO } from '@/types/api/query'
import type { FinancialTransactionBasicVO } from '@/types/api/vo'

const props = defineProps<{
  row: FinancialTransactionBasicVO
}>()

const formData = ref<FinancialTransactionUpdateDTO>()
getFinancialTransactionVO(props.row.id).then((data) => {
  formData.value = data
})
</script>

<template>
  <DataTableForm v-model="formData" :func="updateFinancialTransaction">
    <FinancialTransactionBase v-model="formData" />
  </DataTableForm>
</template>
