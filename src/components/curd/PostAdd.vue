<script lang="ts" setup>
import { savePost } from '@/api/post'
import type { PostSaveDTO } from '@/types/api/query'

const formData = ref<PostSaveDTO>({
  status: 'PENDING'
})
</script>

<template>
  <DataTableForm v-model="formData" :func="savePost">
    <PostBase v-model="formData" />
  </DataTableForm>
</template>
