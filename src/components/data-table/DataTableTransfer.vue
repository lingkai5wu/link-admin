<script lang="ts" setup>
import type LoadingButton from '@/components/LoadingButton.vue'
import type { BatchManyToManyDTO } from '@/types/api/query'
import { type TransferOption } from 'naive-ui'

const props = defineProps<{
  id: number
  getOptionsFunc: () => Promise<TransferOption[]>
  getValueFunc: () => Promise<number[]>
  submitFunc: (id: number, dto: BatchManyToManyDTO) => Promise<null>
}>()
const emits = defineEmits<{
  actionSubmit: [boolean]
  actionFuncExec: [boolean]
}>()

const options = ref<TransferOption[]>()
let origin: number[]
const value = ref<number[]>([])
const isLoading = ref(false)
const loadingButtonRef = ref<InstanceType<typeof LoadingButton> | null>(null)

onMounted(() => {
  fetchOptionsAndValue()
})

async function fetchOptionsAndValue() {
  isLoading.value = true
  try {
    const [optionsData, valueData] = await Promise.all([
      props.getOptionsFunc(),
      props.getValueFunc()
    ])
    options.value = optionsData
    origin = valueData
    value.value = [...valueData]
  } finally {
    isLoading.value = false
  }
}

async function handleClick() {
  const originSet = new Set(origin)
  const valueSet = new Set(value.value)
  let targetIdsToInsert = value.value.filter((id) => !originSet.has(id))
  let targetIdsToDelete = origin.filter((id) => !valueSet.has(id))
  const dto = {
    ...(targetIdsToInsert.length > 0 && { targetIdsToInsert }),
    ...(targetIdsToDelete.length > 0 && { targetIdsToDelete })
  }
  if (Object.keys(dto).length === 0) {
    emits('actionSubmit', false)
    return
  }
  emits('actionFuncExec', true)
  try {
    await props.submitFunc(props.id, dto)
  } finally {
    emits('actionFuncExec', false)
  }
  emits('actionSubmit', true)
}
</script>

<template>
  <n-flex :size="24" vertical>
    <n-spin :show="isLoading">
      <n-transfer
        v-model:value="value"
        :disabled="loadingButtonRef?.isLoading"
        :options="options"
        source-filterable
        target-filterable
      />
    </n-spin>
    <loading-button
      ref="loadingButtonRef"
      :disabled="isLoading"
      :func="handleClick"
      style="width: 100%"
      type="primary"
      >提交
    </loading-button>
  </n-flex>
</template>
