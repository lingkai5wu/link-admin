<script lang="ts" setup>
import type LoadingButton from '@/components/LoadingButton.vue'
import type { BatchUpdateManyToManyDTO } from '@/types/api/query'
import { generateBatchUpdateManyToManyDTO } from '@/utils/common'
import { type TransferOption } from 'naive-ui'

const props = defineProps<{
  id: number
  getOptionsFunc: () => Promise<TransferOption[]>
  getValueFunc: () => Promise<number[]>
  submitFunc: (id: number, dto: BatchUpdateManyToManyDTO<any>) => Promise<null>
}>()
const emits = defineEmits<{
  actionSubmit: [boolean]
  actionFuncExec: [boolean]
}>()

const options = ref<TransferOption[]>()
let oldValue: number[]
const value = ref<number[]>([])
const isLoading = ref(false)
const loadingButtonRef = ref<InstanceType<typeof LoadingButton> | null>(null)

onMounted(() => {
  getOptionsAndValue()
})

async function getOptionsAndValue() {
  isLoading.value = true
  try {
    const [optionsData, valueData] = await Promise.all([
      props.getOptionsFunc(),
      props.getValueFunc()
    ])
    options.value = optionsData
    oldValue = valueData
    value.value = [...valueData]
  } finally {
    isLoading.value = false
  }
}

async function handleClick() {
  const dto = generateBatchUpdateManyToManyDTO(oldValue, value.value)
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
  emits('actionSubmit', false)
}
</script>

<template>
  <n-flex :size="20" vertical>
    <n-spin :show="isLoading">
      <n-transfer
        v-model:value="value"
        :disabled="loadingButtonRef?.isLoading"
        :options
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
    >
      提交
    </loading-button>
  </n-flex>
</template>
