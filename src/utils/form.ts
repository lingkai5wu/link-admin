import { NPopover } from 'naive-ui'
import type { VNode } from 'vue'

export function renderOption({ node, option }: { node: VNode; option: OptionalEntity }) {
  if (!option.description) {
    return node
  }
  return h(
    NPopover,
    { keepAliveOnHover: false },
    {
      trigger: () => node,
      default: () => {
        if (option.description && option.description.length > 0) {
          return option.description
        }
      }
    }
  )
}
