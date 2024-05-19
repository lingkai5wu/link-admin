<script lang="ts" setup>
import { generateOssGetObjectUrl } from '@/api/oss'

const props = defineProps<{
  images: string[] | null
}>()
const imageUrls = ref<string[]>([])
watch(
  () => props.images,
  (newValue: string[] | null) => {
    if (!newValue) {
      return
    }
    imageUrls.value = []
    for (const image of newValue) {
      console.log(image)
      generateOssGetObjectUrl({
        objectName: image,
        imageProcessStyle: 'NORMAL'
      }).then((data) => {
        imageUrls.value.push(data)
        console.log(data)
      })
    }
  }
)
</script>

<template>
  <n-image-group>
    <n-flex style="margin: 10px 0">
      <n-image v-for="(url, i) in imageUrls" :key="i" :src="url" width="100" />
    </n-flex>
  </n-image-group>
</template>

<style scoped></style>
