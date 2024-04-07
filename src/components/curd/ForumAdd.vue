<script lang="ts" setup>
import { saveForum } from '@/api/forum'
import type { ForumSaveDTO } from '@/types/api/query'

const formData = ref<ForumSaveDTO>({})
</script>

<template>
  <DataTableForm v-model="formData" :func="saveForum">
    <ForumBase v-model="formData" />
  </DataTableForm>
</template>
