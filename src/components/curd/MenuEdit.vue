<script lang="ts" setup>
import { updateMenu } from '@/api/menu'
import DataTableForm from '@/components/data-table/DataTableForm.vue'
import type { MenuUpdateQuery } from '@/types/api/query'
import type { MenuVOTree } from '@/types/menu'
import { pick } from '@/utils/common'
import type { FormRules } from 'naive-ui'

const props = defineProps<{
  row: MenuVOTree
  tableData: MenuVOTree[]
}>()

const formData = ref<MenuUpdateQuery>(pick(props.row, ['id', 'pid', 'type', 'label', 'path']))
const rules: FormRules = {
  pid: {
    type: 'number',
    trigger: ['blur']
  },
  label: {
    max: 20,
    trigger: ['blur', 'input']
  },
  type: {
    trigger: ['blur']
  },
  path: {
    max: 255,
    trigger: ['blur', 'input']
  }
}
</script>

<template>
  <DataTableForm v-model:value="formData" :func="updateMenu" :rules="rules">
    <MenuBase v-model="formData" :table-data="tableData" />
  </DataTableForm>
</template>
