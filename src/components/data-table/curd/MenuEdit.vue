<script lang="ts" setup>
import DataTableForm from '@/components/data-table/DataTableForm.vue'
import type { MenuUpdateQuery } from '@/types/api/query'
import type { MenuOptionWithEx } from '@/types/menu'
import { pick } from '@/utils/common'

const props = defineProps<{
  row: MenuOptionWithEx
  tableData: MenuOptionWithEx[]
}>()
const formData = ref<MenuUpdateQuery>(pick(props.row, ['id', 'pid', 'type', 'label', 'path']))
</script>

<template>
  <DataTableForm v-model:value="formData">
    <MenuBase v-model="formData" :table-data="tableData" />
  </DataTableForm>
</template>
