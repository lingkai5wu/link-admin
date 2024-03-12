import type { MenuTypeEnum, UserSexEnum, UserStatusEnum } from '@/types/api/vo'
import { NTag } from 'naive-ui'

type EnumShowType = 'default' | 'error' | 'primary' | 'info' | 'success' | 'warning'

export type EnumConfig<T extends string> = {
  value: T
  label: string
  type?: EnumShowType
}

export function enum2Tag<T extends string>(config: EnumConfig<T>[], key: T | null) {
  if (key) {
    const element = config.find((item) => item.value === key)!
    return h(NTag, { type: element.type }, () => element.label)
  }
}

export const menuTypeEnumConfig: EnumConfig<MenuTypeEnum>[] = [
  {
    value: 'PARENT',
    label: '父菜单',
    type: 'warning'
  },
  {
    value: 'ROUTE',
    label: '路由',
    type: 'primary'
  },
  {
    value: 'LINK',
    label: '链接',
    type: 'info'
  }
]

export const userSexEnumConfig: EnumConfig<UserSexEnum>[] = [
  {
    value: 'MALE',
    label: '男',
    type: 'info'
  },
  {
    value: 'FEMALE',
    label: '女',
    type: 'error'
  },
  {
    value: 'OTHER',
    label: '其他性别'
  },
  {
    value: 'PREFER_NOT_TO_SAY',
    label: '不愿说明'
  },
  {
    value: 'NEUTRAL',
    label: '非二元性别'
  }
]

export const userStatusEnumConfig: EnumConfig<UserStatusEnum>[] = [
  {
    value: 'UNCONFIRMED',
    label: '未验证',
    type: 'info'
  },
  {
    value: 'CONFIRMED',
    label: '正常',
    type: 'primary'
  },
  {
    value: 'BANNED',
    label: '封禁',
    type: 'error'
  },
  {
    value: 'DELETED',
    label: '删除',
    type: 'warning'
  }
]
