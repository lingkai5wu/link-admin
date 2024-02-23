import type { Router } from 'vue-router'

export function createLoadingBarGuard(router: Router) {
  router.beforeEach(() => {
    window.$loadingBar.start()
  })

  router.afterEach(() => {
    window.$loadingBar.finish()
  })

  router.onError(() => {
    window.$loadingBar.error()
  })
}
