<script lang="ts" setup>
import { updateMenu } from '@/api/menu'
import DataTableForm from '@/components/data-table/DataTableForm.vue'
import type { MenuUpdateDTO } from '@/types/api/query'
import type { MenuVOTree } from '@/types/menu'
import { pick } from '@/utils/common'

const props = defineProps<{
  row: MenuVOTree
}>()

const formData = ref<MenuUpdateDTO>(pick(props.row, ['id', 'pid', 'type', 'label', 'path']))
</script>

<template>
  <DataTableForm v-model="formData" :func="updateMenu">
    <MenuBase v-model="formData" />
  </DataTableForm>
</template>
