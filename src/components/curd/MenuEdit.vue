<script lang="ts" setup>
import { updateMenu } from '@/api/menu'
import DataTableForm from '@/components/data-table/DataTableForm.vue'
import type { MenuUpdateQuery } from '@/types/api/query'
import type { MenuVOTree } from '@/types/menu'
import { pick } from '@/utils/common'

const props = defineProps<{
  row: MenuVOTree
  tableData: MenuVOTree[]
}>()

const formData = ref<MenuUpdateQuery>(pick(props.row, ['id', 'pid', 'type', 'label', 'path']))
</script>

<template>
  <DataTableForm v-model:value="formData" :func="updateMenu">
    <MenuBase v-model="formData" :table-data="tableData" />
  </DataTableForm>
</template>
