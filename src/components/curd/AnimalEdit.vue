<script lang="ts" setup>
import { getAnimalVO, updateAnimal } from '@/api/animal'
import type { AnimalUpdateDTO } from '@/types/api/query'
import type { AnimalBasicVO } from '@/types/api/vo'

const props = defineProps<{
  row: AnimalBasicVO
}>()

const formData = ref<AnimalUpdateDTO>()
getAnimalVO(props.row.id).then((data) => {
  formData.value = data
})
</script>

<template>
  <DataTableForm v-model="formData" :func="updateAnimal">
    <AnimalBase v-model="formData" />
  </DataTableForm>
</template>
