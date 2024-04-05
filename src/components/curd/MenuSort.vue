<script lang="ts" setup>
import { batchUpdateMenuOrder, listMenuVOs } from '@/api/menu'
import { generateEntityTreeOptions } from '@/utils/tree'

async function getOptionFunc() {
  const menuVOs = await listMenuVOs()
  return generateEntityTreeOptions(
    menuVOs,
    ['id', 'pid', 'label', 'sortOrder'],
    (menuVO) => menuVO.type === 'PARENT'
  )
}
</script>

<template>
  <n-p>
    通过
    <n-text type="info">拖放操作</n-text>
    修改菜单的层级关系和展示顺序
  </n-p>
  <TreeSort :get-options-func="getOptionFunc" :submit-func="batchUpdateMenuOrder" v-bind="$attrs" />
</template>
