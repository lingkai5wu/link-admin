<script lang="ts" setup>
const model = defineModel<number | null>()

function parse(input: string) {
  const nums = input.replace(/,/g, '').trim()
  if (/^-?\d+(\.(\d{1,2})?)?$/.test(nums)) {
    return Number(nums) * 100
  }
  return input === '' ? null : Number.NaN
}

function format(value: number | null) {
  if (value === null) {
    return ''
  }
  return (value / 100).toLocaleString('en-US')
}
</script>

<template>
  <n-input-number v-model:value="model" :format :parse />
</template>
