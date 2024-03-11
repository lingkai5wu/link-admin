<script lang="ts" setup>
import DataTableForm from '@/components/data-table/DataTableForm.vue'
import type { MenuSaveQuery } from '@/types/api/query'
import type { MenuVOTree } from '@/types/menu'
import type { FormRules } from 'naive-ui'

const props = defineProps<{
  row: MenuVOTree
  tableData: MenuVOTree[]
}>()

const formData = ref<MenuSaveQuery>({
  pid: props.row.id
})
const rules: FormRules = {
  pid: {
    type: 'number',
    required: true,
    trigger: ['blur']
  },
  label: {
    required: true,
    max: 20,
    trigger: ['blur', 'input']
  },
  type: {
    required: true,
    trigger: ['blur']
  },
  path: {
    required: true,
    max: 255,
    trigger: ['blur', 'input']
  }
}
</script>

<template>
  <DataTableForm v-model:value="formData" :rules="rules">
    <MenuBase v-model="formData" :table-data="tableData" is-add />
  </DataTableForm>
</template>
