<script lang="ts" setup>
import { batchUpdateForumOrder, listForumVOs } from '@/api/forum'
import { generateEntityTreeOptions } from '@/utils/tree'

async function getOptionFunc() {
  const forumVOs = await listForumVOs()
  return generateEntityTreeOptions(forumVOs, ['id', 'pid', 'label', 'sortOrder'], true)
}
</script>

<template>
  <n-p>
    通过
    <n-text type="info">拖放操作</n-text>
    修改板块的层级关系和展示顺序
  </n-p>
  <TreeSort
    :get-options-func="getOptionFunc"
    :submit-func="batchUpdateForumOrder"
    v-bind="$attrs"
  />
</template>
