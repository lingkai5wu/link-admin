<script lang="ts" setup>
import { listMenuVOs } from '@/api/menu'
import type { MenuUpdateDTO } from '@/types/api/query'
import { menuTypeEnumConfig } from '@/utils/enum'
import { generateEntityTreeOptions } from '@/utils/tree'
import type { CascaderOption } from 'naive-ui'

const formData = defineModel<MenuUpdateDTO>({ required: true })

const cascaderOptions = ref<CascaderOption[]>([
  {
    id: 0,
    label: '根节点'
  }
])
listMenuVOs({ type: 'PARENT' }).then((menuVOs) => {
  const treeOptions = generateEntityTreeOptions(
    menuVOs,
    ['id', 'label'],
    false,
    (menuVO) => menuVO.id === formData.value.id
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
    label="父菜单"
    path="pid"
  >
    <n-cascader v-model:value="formData.pid" :options="cascaderOptions" value-field="id" />
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
