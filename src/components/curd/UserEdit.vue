<script lang="ts" setup>
import { updateUser } from '@/api/user'
import type { UserUpdateDTO } from '@/types/api/query'
import type { UserVO } from '@/types/api/vo'
import { pick } from '@/utils/common'

const props = defineProps<{
  row: UserVO
}>()

const formData = ref<UserUpdateDTO>(
  pick(props.row, ['id', 'status', 'nickname', 'realname', 'avatar', 'sex'])
)
</script>

<template>
  <DataTableForm v-model="formData" :func="updateUser">
    <UserBase v-model="formData" />
  </DataTableForm>
</template>
