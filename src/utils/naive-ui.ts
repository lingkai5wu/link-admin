import { createDiscreteApi, darkTheme, useOsTheme } from 'naive-ui'
import { computed } from 'vue'

export const theme = computed(() => (useOsTheme().value === 'dark' ? darkTheme : null))

export function initNaiveUIDiscreteApi() {
  const { message, dialog, notification, loadingBar } = createDiscreteApi(
    ['message', 'dialog', 'notification', 'loadingBar'],
    {
      configProviderProps: computed(() => ({
        theme: theme.value
      }))
    }
  )
  window.$message = message
  window.$dialog = dialog
  window.$notification = notification
  window.$loadingBar = loadingBar
}
