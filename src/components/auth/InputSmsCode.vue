<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth'

const props = withDefaults(
  defineProps<{
    func: () => Promise<void>
    interval?: number
  }>(),
  {
    interval: 60
  }
)
const inputModel = defineModel<string>('value')

const isCountdownActive = ref(false)
let countdownDuration = 0

const authStore = useAuthStore()

onMounted(() => {
  const current = Date.now()
  const last = authStore.lastSentSmsCodeTimestamp
  const interval = props.interval * 1000
  if (!last || last + interval <= current) {
    return
  }
  countdownDuration = interval - (current - last)
  isCountdownActive.value = true
})

function countdownRender({
  hours,
  minutes,
  seconds
}: {
  hours: number
  minutes: number
  seconds: number
}) {
  const totalSeconds = hours * 3600 + minutes * 60 + seconds
  return h('span', totalSeconds + 's')
}

async function handleSent() {
  countdownDuration = props.interval * 1000
  await props.func()
  authStore.lastSentSmsCodeTimestamp = Date.now()
  setTimeout(() => (isCountdownActive.value = true), 200)
}
</script>

<template>
  <n-input v-model:value="inputModel">
    <template #suffix>
      <LoadingButton :disabled="isCountdownActive" :func="handleSent" quaternary size="small">
        <n-flex size="small">
          <n-countdown
            v-if="isCountdownActive"
            :active="isCountdownActive"
            :duration="countdownDuration"
            :render="countdownRender"
            @finish="isCountdownActive = false"
          />
          <span>获取验证码</span>
        </n-flex>
      </LoadingButton>
    </template>
  </n-input>
</template>
