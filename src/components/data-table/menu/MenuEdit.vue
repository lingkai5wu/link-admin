<script lang="ts" setup>
import { updateMenu } from '@/api/menu'
import type { MenuUpdateQuery } from '@/types/api/query'
import type { MenuVO } from '@/types/api/vo'
import type { MenuOptionWithEx } from '@/types/menu'
import { getDifferences, pick } from '@/utils/common'

const props = defineProps<{
  row: MenuOptionWithEx
}>()
const emits = defineEmits<{
  actionSuccess: [void]
}>()
const originalFormData = pick(props.row, ['id', 'pid', 'type', 'label', 'path'])
const formData = ref<MenuVO>({ ...originalFormData })

async function handleClick() {
  const data: MenuUpdateQuery | null = getDifferences(props.row, formData.value)
  if (data !== null) {
    await updateMenu(data)
  }
  emits('actionSuccess')
}
</script>

<template>
  <n-form v-model="formData">
    <n-form-item label="标签" path="label">
      <n-input v-model:value="formData.label" />
    </n-form-item>
    <n-form-item label="类型" path="type">
      <n-input v-model:value="formData.type" />
    </n-form-item>
    <n-form-item label="路径" path="path">
      <n-input v-model:value="formData.path" />
    </n-form-item>
    <n-flex size="large" vertical>
      <n-button style="width: 100%" @click="formData = { ...originalFormData }">重置</n-button>
      <LoadingButton :func="handleClick" style="width: 100%" type="primary">提交</LoadingButton>
    </n-flex>
  </n-form>
</template>

<style scoped></style>
