<script lang="ts" setup>
import { listMenuVOs } from '@/api/menu'
import type { MenuUpdateDTO } from '@/types/api/query'
import type { MenuVOTree } from '@/types/menu'
import { menuTypeEnumConfig } from '@/utils/enum'
import { generateMenuVOTrees } from '@/utils/menu'
import type { CascaderOption } from 'naive-ui/es/cascader/src/interface'

const formData = defineModel<MenuUpdateDTO>({ required: true })

let menuVOTrees: MenuVOTree[]
listMenuVOs({ type: 'PARENT' }).then((data) => {
  menuVOTrees = generateMenuVOTrees(data)
  cascaderOptions.value.push(...generateCascaderOptions(menuVOTrees))
})
const cascaderOptions = ref<CascaderOption[]>([
  {
    value: 0,
    label: '根节点'
  }
])

function generateCascaderOptions(menuVOTrees: MenuVOTree[]): CascaderOption[] {
  const options: CascaderOption[] = []
  for (const menu of menuVOTrees) {
    if (menu.id === formData.value.id) {
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
  <n-form-item
    :rule="{
      type: 'number',
      required: true,
      trigger: ['blur']
    }"
    label="父菜单"
    path="pid"
  >
    <n-cascader v-model:value="formData.pid" :options="cascaderOptions" />
  </n-form-item>
  <n-form-item
    :rule="{
      required: true,
      max: 20,
      trigger: ['blur', 'input']
    }"
    label="标签"
    path="label"
  >
    <n-input v-model:value="formData.label" />
  </n-form-item>
  <n-form-item
    :rule="{
      required: true,
      trigger: ['blur']
    }"
    label="类型"
    path="type"
  >
    <n-radio-group v-model:value="formData.type" name="type">
      <n-radio-button
        v-for="config in menuTypeEnumConfig"
        :key="config.value"
        :label="config.label"
        :value="config.value"
      />
    </n-radio-group>
  </n-form-item>
  <n-form-item
    v-if="formData.type !== 'PARENT'"
    :rule="{
      required: true,
      max: 255,
      trigger: ['blur', 'input']
    }"
    label="路径"
    path="path"
  >
    <n-input v-model:value="formData.path" :autosize="{ minRows: 1 }" type="textarea" />
  </n-form-item>
</template>
