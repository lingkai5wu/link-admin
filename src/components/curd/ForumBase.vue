<script lang="ts" setup>
import { listForumVOs } from '@/api/forum'
import type { ForumUpdateDTO } from '@/types/api/query'
import { generateEntityTreeOptions } from '@/utils/tree'
import type { CascaderOption } from 'naive-ui'

const formData = defineModel<ForumUpdateDTO>({ required: true })

const cascaderOptions = ref<CascaderOption[]>([
  {
    id: 0,
    label: '根节点'
  }
])
listForumVOs().then((forumVOs) => {
  const treeOptions = generateEntityTreeOptions(
    forumVOs,
    ['id', 'label'],
    false,
    (forumVO) => forumVO.id === formData.value.id
  )
  cascaderOptions.value.push(...treeOptions)
})
</script>

<template>
  <n-form-item
    :rule="{
      type: 'number',
      required: true,
      trigger: ['blur']
    }"
    label="父板块"
    path="pid"
  >
    <n-cascader v-model:value="formData.pid" :options="cascaderOptions" value-field="id" />
  </n-form-item>
  <n-form-item
    :rule="{
      required: true,
      trigger: ['blur']
    }"
    label="标签"
    path="label"
  >
    <n-input v-model:value="formData.label" />
  </n-form-item>
  <n-form-item label="描述" path="description">
    <n-input v-model:value="formData.description" :autosize="{ minRows: 1 }" type="textarea" />
  </n-form-item>
</template>
