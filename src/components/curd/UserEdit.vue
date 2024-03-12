<script lang="ts" setup>
import { updateUser } from '@/api/user'
import type { UserUpdateQuery } from '@/types/api/query'
import type { UserVO } from '@/types/api/vo'
import { pick } from '@/utils/common'

const props = defineProps<{
  row: UserVO
}>()

const formData = ref<UserUpdateQuery>(
  pick(props.row, ['id', 'phone', 'status', 'nickname', 'realname', 'avatar', 'sex'])
)
</script>

<template>
  <DataTableForm v-model:value="formData" :func="updateUser">
    <UserBase v-model="formData" />
  </DataTableForm>
</template>
