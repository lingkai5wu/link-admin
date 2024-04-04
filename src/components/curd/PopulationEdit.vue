<script lang="ts" setup>
import { getPopulationVO, updatePopulation } from '@/api/population'
import type { PopulationUpdateDTO } from '@/types/api/query'
import type { PopulationInfoVO } from '@/types/api/vo'

const props = defineProps<{
  row: PopulationInfoVO
}>()

const formData = ref<PopulationUpdateDTO>()
getPopulationVO(props.row.id).then((data) => {
  formData.value = data
})
</script>

<template>
  <DataTableForm v-model="formData" :func="updatePopulation">
    <PopulationBase v-model="formData" />
  </DataTableForm>
</template>
