<script lang="ts" setup>
import { saveForum } from '@/api/forum'
import type { ForumSaveDTO } from '@/types/api/query'
import type { ForumVO } from '@/types/api/vo'
import type { EntityTree } from '@/types/tree'

const props = defineProps<{
  row?: EntityTree<ForumVO>
}>()

const formData = ref<ForumSaveDTO>({
  pid: props.row?.id || 0
})
</script>

<template>
  <DataTableForm v-model="formData" :func="saveForum">
    <ForumBase v-model="formData" />
  </DataTableForm>
</template>
