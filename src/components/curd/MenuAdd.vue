<script lang="ts" setup>
import { saveMenu } from '@/api/menu'
import type { MenuSaveDTO } from '@/types/api/query'
import type { MenuVOTree } from '@/types/tree'

const props = defineProps<{
  row?: MenuVOTree
}>()

const formData = ref<MenuSaveDTO>({
  pid: props.row?.id || 0
})
</script>

<template>
  <DataTableForm v-model="formData" :func="saveMenu">
    <MenuBase v-model="formData" />
  </DataTableForm>
</template>
