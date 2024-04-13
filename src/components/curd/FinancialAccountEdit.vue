<script lang="ts" setup>
import { getFinancialAccountVO, updateFinancialAccount } from '@/api/financial-account'
import type { FinancialAccountUpdateDTO } from '@/types/api/query'
import type { FinancialAccountBasicVO } from '@/types/api/vo'

const props = defineProps<{
  row: FinancialAccountBasicVO
}>()

const formData = ref<FinancialAccountUpdateDTO>()
getFinancialAccountVO(props.row.id).then((data) => {
  formData.value = data
})
</script>

<template>
  <DataTableForm v-model="formData" :func="updateFinancialAccount">
    <FinancialAccountBase v-model="formData" />
  </DataTableForm>
</template>
