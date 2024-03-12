<script lang="ts" setup>
import { saveMenu } from '@/api/menu'
import DataTableForm from '@/components/data-table/DataTableForm.vue'
import type { MenuSaveQuery } from '@/types/api/query'
import type { MenuVOTree } from '@/types/menu'

const props = defineProps<{
  row: MenuVOTree
  tableData: MenuVOTree[]
}>()

const formData = ref<MenuSaveQuery>({
  pid: props.row.id
})
</script>

<template>
  <DataTableForm v-model:value="formData" :func="saveMenu">
    <MenuBase v-model="formData" :table-data="tableData" is-add />
  </DataTableForm>
</template>
