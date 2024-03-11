<script lang="ts" setup>
import type { MenuUpdateQuery } from '@/types/api/query'
import type { MenuVOTree } from '@/types/menu'
import type { CascaderOption } from 'naive-ui/es/cascader/src/interface'

const props = defineProps<{
  tableData: MenuVOTree[]
  isAdd?: boolean
}>()
const formData = defineModel<MenuUpdateQuery>({ required: true })

const cascaderOptions: CascaderOption[] = [
  {
    value: 0,
    label: '根节点'
  },
  ...generateCascaderOptions(props.tableData)
]

function generateCascaderOptions(menuVOTrees: MenuVOTree[]): CascaderOption[] {
  const options: CascaderOption[] = []
  for (const menu of menuVOTrees) {
    if (menu.type !== 'PARENT') {
      continue
    }
    const option: CascaderOption = {
      value: menu.id,
      label: menu.label
    }
    if (menu.children) {
      const children = generateCascaderOptions(menu.children)
      if (children.length > 0) {
        option.children = children
      }
    }
    options.push(option)
  }
  return options
}
</script>

<template>
  <n-form-item label="父菜单" path="pid">
    <n-cascader v-model:value="formData.pid" :options="cascaderOptions" />
  </n-form-item>
  <n-form-item label="标签" path="label">
    <n-input v-model:value="formData.label" />
  </n-form-item>
  <n-form-item label="类型" path="type">
    <n-radio-group v-model:value="formData.type" name="type">
      <n-radio-button :disabled="!isAdd" label="父菜单" value="PARENT" />
      <n-radio-button label="路由" value="ROUTE" />
      <n-radio-button label="链接" value="LINK" />
    </n-radio-group>
  </n-form-item>
  <n-form-item label="路径" path="path">
    <n-input v-model:value="formData.path" />
  </n-form-item>
</template>

<style scoped></style>
