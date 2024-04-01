<script lang="ts" setup>
import type { Action, Actions, ActionWithComponent } from '@/components/data-table/types'
import type { FlexProps } from 'naive-ui'
import { NButtonGroup, NFlex } from 'naive-ui'

const props = defineProps<{
  actions?: Actions
  row?: DataWithId
  flexProps?: FlexProps
}>()

const emits = defineEmits<{
  actionTrigger: [DataWithId | undefined, ActionWithComponent, string]
  actionSubmit: [boolean]
}>()

const isLoading = ref(false)
const component = computed(() => {
  if (props.flexProps) {
    return NFlex
  }
  return NButtonGroup
})
const componentProps = computed(() => {
  if (props.flexProps) {
    return props.flexProps
  }
})

async function handleActionTrigger(action: Action, actionKey: string) {
  if (!action.component) {
    isLoading.value = true
    try {
      await action.func(props.row)
      emits('actionSubmit', true)
    } finally {
      isLoading.value = false
    }
    return
  }
  emits('actionTrigger', props.row, action, actionKey)
}
</script>

<template>
  <Component :is="component" v-bind="componentProps">
    <ActionButton
      v-for="(action, key) in actions"
      :key
      :action
      :is-group-loading="isLoading"
      :row
      @action-trigger="handleActionTrigger(action, key as string)"
    />
  </Component>
</template>
