<script lang="ts" setup>
import { saveMenu } from '@/api/menu'
import DataTableForm from '@/components/data-table/DataTableForm.vue'
import type { MenuSaveDTO } from '@/types/api/query'
import type { MenuVOTree } from '@/types/menu'

const props = defineProps<{
  row: MenuVOTree
}>()

const formData = ref<MenuSaveDTO>({
  pid: props.row.id
})
</script>

<template>
  <DataTableForm v-model:value="formData" :func="saveMenu">
    <MenuBase v-model="formData" is-add />
  </DataTableForm>
</template>
