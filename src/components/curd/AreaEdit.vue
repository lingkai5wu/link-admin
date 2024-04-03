<script lang="ts" setup>
import { updateArea } from '@/api/area'
import type { AreaUpdateDTO } from '@/types/api/query'
import type { AreaVO } from '@/types/api/vo'
import { pick } from '@/utils/data'

const props = defineProps<{
  row: AreaVO
}>()

const formData = ref<AreaUpdateDTO>(pick(props.row, ['id', 'label', 'description']))
</script>

<template>
  <DataTableForm v-model="formData" :func="updateArea">
    <AreaBase v-model="formData" />
  </DataTableForm>
</template>
