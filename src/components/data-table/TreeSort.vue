<script lang="ts" setup>
import type LoadingButton from '@/components/LoadingButton.vue'
import type { EntityOrderUpdateDTO } from '@/types/api/query'
import type { EntityTreeNode } from '@/types/tree'
import type { TreeDropInfo, TreeOption } from 'naive-ui'

const props = defineProps<{
  getOptionsFunc: () => Promise<SortableEntity[]>
  submitFunc: (dtos: EntityOrderUpdateDTO[]) => Promise<null>
}>()

const emits = defineEmits<{
  actionSubmit: [boolean]
  actionFuncExec: [boolean]
}>()

const isLoading = ref(false)
let oldOptions: SortableEntity[] = []
const options = ref<SortableEntity[]>()
getOptions()
const loadingButtonRef = ref<InstanceType<typeof LoadingButton> | null>(null)

async function getOptions() {
  isLoading.value = true
  try {
    oldOptions = await props.getOptionsFunc()
    options.value = [...oldOptions]
  } finally {
    isLoading.value = false
  }
}

// 寻找节点及其在父节点数组中的索引
function findSiblingsAndIndex(
  node: TreeOption,
  nodes: TreeOption[] = []
): [TreeOption[], number] | [null, null] {
  if (nodes.length === 0) {
    return [null, null]
  }

  // 遍历节点数组
  for (let i = 0; i < nodes.length; ++i) {
    const siblingNode = nodes[i]

    // 当前遍历到的节点与目标节点 id 相同，返回当前节点数组及索引
    if (siblingNode.id === node.id) {
      return [nodes, i]
    }

    // 递归查找目标节点在子节点列表中的位置
    const [subSiblings, subIndex] = findSiblingsAndIndex(node, siblingNode.children)

    // 如果在子节点中找到了目标节点，则返回其所在子节点数组和索引
    if (subSiblings && subIndex !== null) {
      return [subSiblings, subIndex]
    }
  }

  return [null, null]
}

// 处理拖放操作
function handleDrop({ node, dragNode, dropPosition }: TreeDropInfo) {
  // 查找拖动节点在原始节点数组中的兄弟节点及索引
  const [dragNodeSiblings, dragNodeIndex] = findSiblingsAndIndex(dragNode, options.value)

  // 如果未找到拖动节点的位置信息，则直接返回
  if (dragNodeSiblings === null || dragNodeIndex === null) {
    return
  }

  // 将拖动节点从原位置移除
  dragNodeSiblings.splice(dragNodeIndex, 1)

  // 根据 dropPosition 的不同进行节点插入操作
  if (dropPosition === 'inside') {
    // 拖放到内部时，将拖动节点添加到目标节点的子节点列表开头
    if (node.children) {
      node.children.unshift(dragNode)
    } else {
      // 如果目标节点没有子节点，则创建一个包含拖动节点的新子节点列表
      node.children = [dragNode]
    }
  } else {
    // 拖放到外部时，查找目标节点在原始节点数组中的兄弟节点及索引
    const [nodeSiblings, nodeIndex] = findSiblingsAndIndex(node, options.value)

    // 如果未找到目标节点的位置信息，则直接返回
    if (nodeSiblings === null || nodeIndex === null) {
      return
    }

    // 根据 dropPosition 插入拖动节点：'after' 在目标节点后，'before' 在目标节点前
    nodeSiblings.splice(nodeIndex + (dropPosition === 'after' ? 1 : 0), 0, dragNode)
  }
}

function generateEntityOrderUpdateDTOs(treeNodes: EntityTreeNode<SortableEntity>[] | undefined) {
  if (!treeNodes) {
    return []
  }
  const result: EntityOrderUpdateDTO[] = []
  let sortOrder = 0

  function traverse(node: EntityTreeNode<SortableEntity>, pid = 0): void {
    sortOrder++
    const dto: EntityOrderUpdateDTO = {
      id: node.id,
      ...(node.pid !== undefined && pid !== node.pid && { pid }),
      ...(sortOrder !== node.sortOrder && { sortOrder })
    }
    if (Object.keys(dto).length > 1) {
      result.push(dto)
    }

    if (node.children) {
      for (const child of node.children) {
        traverse(child, node.id)
      }
    }
  }

  treeNodes.forEach((node) => traverse(node))
  return result
}

async function handleClick() {
  const dtos = generateEntityOrderUpdateDTOs(options.value)
  if (Object.keys(dtos).length === 0) {
    emits('actionSubmit', false)
    return
  }
  emits('actionFuncExec', true)
  try {
    await props.submitFunc(dtos)
  } finally {
    emits('actionFuncExec', false)
  }
  emits('actionSubmit', true)
}
</script>

<template>
  <n-flex :size="20" vertical>
    <n-spin :show="isLoading">
      <n-tree
        :data="options"
        :disabled="loadingButtonRef?.isLoading"
        :selectable="false"
        block-line
        draggable
        expand-on-click
        key-field="id"
        show-line
        @drop="handleDrop"
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
