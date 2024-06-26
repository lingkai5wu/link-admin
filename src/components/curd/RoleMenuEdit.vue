<script lang="ts" setup>
import { listMenuVOs } from '@/api/menu'
import { batchUpdateRoleMenu, listRoleMenuVOs } from '@/api/role'
import type LoadingButton from '@/components/LoadingButton.vue'
import type { RoleVO } from '@/types/api/vo'
import { generateBatchUpdateManyToManyDTO } from '@/utils/data'
import { generateMenuVOTreeOptions } from '@/utils/menu'
import type { TreeOption } from 'naive-ui'

const props = defineProps<{
  row: RoleVO
}>()
const emits = defineEmits<{
  actionSubmit: [boolean]
  actionFuncExec: [boolean]
}>()

const options = ref<TreeOption[]>()
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
    const [menuVOs, roleMenuVOs] = await Promise.all([listMenuVOs(), listRoleMenuVOs(props.row.id)])
    options.value = generateMenuVOTreeOptions(menuVOs)
    oldValue = roleMenuVOs.map((menuVO) => menuVO.id)
    value.value = [...oldValue]
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
    await batchUpdateRoleMenu(props.row.id, dto)
  } finally {
    emits('actionFuncExec', false)
  }
  emits('actionSubmit', false)
}
</script>

<template>
  <n-p>
    修改
    <n-text type="info">{{ row.name }}</n-text>
    菜单
  </n-p>
  <n-flex :size="20" vertical>
    <n-spin :show="isLoading">
      <n-tree
        v-model:checked-keys="value"
        :data="options"
        :disabled="loadingButtonRef?.isLoading"
        :selectable="false"
        block-line
        cascade
        checkable
        expand-on-click
        key-field="id"
        show-line
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
