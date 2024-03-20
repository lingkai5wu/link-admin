<script lang="ts" setup>
import { listRoleVOs } from '@/api/role'
import { listUserRoleVOs, updateUserRoleByBatch } from '@/api/user'
import type { UserVO } from '@/types/api/vo'
import type { TransferOption } from 'naive-ui'

const props = defineProps<{
  row: UserVO
}>()
const emits = defineEmits<{
  actionSubmit: [boolean]
  actionFuncExec: [boolean]
}>()

const options = ref<TransferOption[]>()
listRoleVOs().then((data) => {
  options.value = data.map((roleVO) => ({
    label: roleVO.name,
    value: roleVO.id
  }))
})
const value = ref<number[]>()
let origin: number[]
listUserRoleVOs(props.row.id).then((data) => {
  origin = data.map((roleVO) => roleVO.id)
  value.value = [...origin]
})

async function handleClick() {
  const originSet = new Set(origin)
  const valueSet = new Set(value.value)
  let targetIdsToInsert = value.value?.filter((id) => !originSet.has(id))
  let targetIdsToDelete = origin.filter((id) => !valueSet.has(id))
  emits('actionFuncExec', true)
  try {
    await updateUserRoleByBatch(props.row.id, { targetIdsToInsert, targetIdsToDelete })
  } finally {
    emits('actionFuncExec', false)
  }
  emits('actionSubmit', true)
}
</script>

<template>
  <n-flex :size="24" vertical>
    <n-transfer v-model:value="value" :options="options" />
    <loading-button :func="handleClick" style="width: 100%" type="primary">提交</loading-button>
  </n-flex>
</template>

<style scoped></style>
