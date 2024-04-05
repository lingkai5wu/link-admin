<script lang="ts" setup>
import { updateMenu } from '@/api/menu'
import type { MenuUpdateDTO } from '@/types/api/query'
import type { MenuVOTree } from '@/types/tree'
import { pick } from '@/utils/data'

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
