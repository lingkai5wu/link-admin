<script lang="ts" setup>
import { getPostVO, updatePost } from '@/api/post'
import type { PostUpdateDTO } from '@/types/api/query'
import type { PostBasicVO } from '@/types/api/vo'

const props = defineProps<{
  row: PostBasicVO
}>()

const formData = ref<PostUpdateDTO>()
getPostVO(props.row.id).then((data) => {
  formData.value = data
})
</script>

<template>
  <DataTableForm v-model="formData" :func="updatePost">
    <PostBase v-model="formData" />
  </DataTableForm>
</template>
