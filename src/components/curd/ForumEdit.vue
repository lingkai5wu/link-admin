<script lang="ts" setup>
import { getForumVO, updateForum } from '@/api/forum'
import type { ForumUpdateDTO } from '@/types/api/query'
import type { ForumBasicVO } from '@/types/api/vo'

const props = defineProps<{
  row: ForumBasicVO
}>()

const formData = ref<ForumUpdateDTO>()
getForumVO(props.row.id).then((data) => {
  formData.value = data
})
</script>

<template>
  <DataTableForm v-model="formData" :func="updateForum">
    <ForumBase v-model="formData" />
  </DataTableForm>
</template>
