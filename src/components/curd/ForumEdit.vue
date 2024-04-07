<script lang="ts" setup>
import { updateForum } from '@/api/forum'
import type { ForumUpdateDTO } from '@/types/api/query'
import type { ForumBasicVO } from '@/types/api/vo'
import { pick } from '@/utils/data'

const props = defineProps<{
  row: ForumBasicVO
}>()

const formData = ref<ForumUpdateDTO>(
  pick(props.row, ['id', 'label', 'status', 'description', 'notice', 'header'])
)
</script>

<template>
  <DataTableForm v-model="formData" :func="updateForum">
    <ForumBase v-model="formData" />
  </DataTableForm>
</template>
