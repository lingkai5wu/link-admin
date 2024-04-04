<script lang="ts" setup>
import { listAreaVOs } from '@/api/area'
import { listSpeciesVOs } from '@/api/species'
import type { PopulationUpdateDTO } from '@/types/api/query'
import type { AreaVO, SpeciesVO } from '@/types/api/vo'
import { NPopover } from 'naive-ui'
import type { VNode } from 'vue'

const formData = defineModel<PopulationUpdateDTO>({ default: {} })
const speciesOptions = ref<SpeciesVO[]>([])
listSpeciesVOs().then((data) => {
  speciesOptions.value = data
})
const areaOptions = ref<AreaVO[]>([])
listAreaVOs().then((data) => {
  areaOptions.value = data
})

function renderOption({ node, option }: { node: VNode; option: PopulationUpdateDTO | AreaVO }) {
  if (!option.description) {
    return node
  }
  return h(NPopover, null, {
    trigger: () => node,
    default: () => option.description
  })
}
</script>

<template>
  <n-form-item
    :rule="{
      type: 'number',
      required: true,
      trigger: ['blur']
    }"
    label="物种"
    path="speciesId"
  >
    <n-select
      v-model:value="formData.speciesId"
      :loading="speciesOptions.length === 0"
      :options="speciesOptions"
      :render-option="renderOption"
      filterable
      value-field="id"
    />
  </n-form-item>
  <n-form-item
    :rule="{
      type: 'number',
      required: true,
      trigger: ['blur']
    }"
    label="区域"
    path="areaId"
  >
    <n-select
      v-model:value="formData.areaId"
      :loading="areaOptions.length === 0"
      :options="areaOptions"
      :render-option="renderOption"
      filterable
      value-field="id"
    />
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
