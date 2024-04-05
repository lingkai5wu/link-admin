<script lang="ts" setup>
import { updateMenu } from '@/api/menu'
import type { ForumUpdateDTO } from '@/types/api/query'
import type { ForumVO } from '@/types/api/vo'
import type { EntityTree } from '@/types/tree'
import { pick } from '@/utils/data'

const props = defineProps<{
  row: EntityTree<ForumVO>
}>()

const formData = ref<ForumUpdateDTO>(pick(props.row, ['id', 'pid', 'label', 'description']))
</script>

<template>
  <DataTableForm v-model="formData" :func="updateMenu">
    <MenuBase v-model="formData" />
  </DataTableForm>
</template>
