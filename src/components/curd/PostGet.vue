<script lang="ts" setup>
import { getPostVO } from '@/api/post'
import type { PostBasicVO, PostVO } from '@/types/api/vo'

const props = defineProps<{
  row: PostBasicVO
}>()

const post = ref<PostVO>({})
getPostVO(props.row.id).then((data) => {
  post.value = data
})
</script>

<template>
  <n-h3>{{ post.title }}</n-h3>
  <n-p v-if="post.contact">联系方式：{{ post.contact }}</n-p>
  <n-card>
    {{ post.content }}
  </n-card>
  <ImageGroup :images="post.attachment" />
</template>
