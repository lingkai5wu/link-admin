<script lang="ts" setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const title = computed(() => route.meta.title)
</script>

<template>
  <h2 style="margin: 20px">{{ title }}</h2>
</template>
