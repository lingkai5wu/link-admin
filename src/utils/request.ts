import router from '@/router/index.js'
import { useAuthStore } from '@/stores/auth.js'
import type { Result } from '@/types/api/vo'
import type { AxiosResponse } from 'axios'
import axios from 'axios'

const baseURL = '/api'
const instance = axios.create({ baseURL })

instance.interceptors.request.use((config) => {
  const authStore = useAuthStore()
  if (authStore.token) {
    config.headers[authStore.token.tokenName] = authStore.token.tokenValue
  }
  return config
})

instance.interceptors.response.use(
  async (response: AxiosResponse<Result<any>, any>) => {
    if (response.data.code === 200) {
      return response.data.data
    }

    window.$message.error(response.data.msg)
    window.$loadingBar.error()
    if (response.data.code === 401) {
      const authStore = useAuthStore()
      authStore.token = null
      await router.replace('/login')
    }
    return Promise.reject(response.data)
  },
  (err) => {
    window.$dialog.error({
      title: '服务器错误',
      content: '请联系管理员，等待服务恢复',
      positiveText: '好的'
    })
    window.$loadingBar.error()
    return Promise.reject(err)
  }
)

export default instance
