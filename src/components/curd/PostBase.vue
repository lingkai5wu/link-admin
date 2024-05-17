<script lang="ts" setup>
import { listForumBasicVOs } from '@/api/forum'
import type { PostUpdateDTO } from '@/types/api/query'
import { entityStatusEnumConfig, postStatusEnumConfig } from '@/utils/enum'
import { checkPermission } from '@/utils/permission'

const formData = defineModel<PostUpdateDTO>({ default: {} })

const statusEnum = checkPermission('post:edit') ? entityStatusEnumConfig : postStatusEnumConfig
</script>

<template>
  <n-form-item
    :rule="{ type: 'number', required: true, trigger: ['blur'] }"
    label="板块"
    path="forumId"
  >
    <SelectEntity v-model="formData.forumId" :func="listForumBasicVOs" />
  </n-form-item>
  <n-form-item :rule="{ required: true, trigger: ['blur'] }" label="标题" path="title">
    <n-input v-model:value="formData.title" />
  </n-form-item>
  <n-form-item :rule="{ required: true, trigger: ['blur'] }" label="状态" path="status">
    <n-select v-model:value="formData.status" :options="statusEnum" />
  </n-form-item>
  <n-form-item label="联系方式" path="contact">
    <n-input v-model:value="formData.contact" :autosize="{ minRows: 1 }" type="textarea" />
  </n-form-item>
  <n-form-item :rule="{ required: true, trigger: ['blur'] }" label="内容" path="content">
    <n-input v-model:value="formData.content" :autosize="{ minRows: 4 }" type="textarea" />
  </n-form-item>
  <ImageUploadFormItem v-model="formData.attachment" />
</template>
