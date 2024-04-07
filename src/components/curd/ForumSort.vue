<script lang="ts" setup>
import { batchUpdateForumOrder, listForumBasicVOs } from '@/api/forum'
</script>

<template>
  <n-p>
    通过
    <n-text type="info">拖放操作</n-text>
    修改板块的展示顺序
  </n-p>
  <TreeSort :get-options-func="listForumBasicVOs" :submit-func="batchUpdateForumOrder" v-bind="$attrs" />
</template>
