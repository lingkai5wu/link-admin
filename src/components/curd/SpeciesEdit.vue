<script lang="ts" setup>
import { updateSpecies } from '@/api/species'
import type { SpeciesUpdateDTO } from '@/types/api/query'
import type { SpeciesVO } from '@/types/api/vo'
import { clone } from '@/utils/common'

const props = defineProps<{
  row: SpeciesVO
}>()

const formData = ref<SpeciesUpdateDTO>(clone(props.row))
</script>

<template>
  <DataTableForm v-model="formData" :func="updateSpecies">
    <SpeciesBase v-model="formData" />
  </DataTableForm>
</template>
