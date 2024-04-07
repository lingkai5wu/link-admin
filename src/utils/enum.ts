import type {
  AnimalSexEnum,
  AnimalStatusEnum,
  EntityStatusEnum,
  MenuTypeEnum,
  UserSexEnum,
  UserStatusEnum
} from '@/types/api/vo'
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

export const animalSexEnumConfig: EnumConfig<AnimalSexEnum>[] = [
  {
    value: 'MALE',
    label: '公',
    type: 'info'
  },
  {
    value: 'FEMALE',
    label: '母',
    type: 'error'
  },
  {
    value: 'OTHER',
    label: '其他性别'
  },
  {
    value: 'UNKNOWN',
    label: '未知',
    type: 'warning'
  }
]

export const animalStatusEnumConfig: EnumConfig<AnimalStatusEnum>[] = [
  {
    value: 'NORMAL',
    label: '在读',
    type: 'primary'
  },
  {
    value: 'MISSING',
    label: '休学',
    type: 'warning'
  },
  {
    value: 'ADOPTED',
    label: '毕业',
    type: 'info'
  },
  {
    value: 'DECEASED',
    label: '退学',
    type: 'error'
  }
]

export const entityStatusEnumConfig: EnumConfig<EntityStatusEnum>[] = [
  {
    value: 'DRAFT',
    label: '草稿'
  },
  {
    value: 'PENDING',
    label: '等待',
    type: 'info'
  },
  {
    value: 'LOCKED',
    label: '锁定',
    type: 'warning'
  },
  {
    value: 'APPROVED',
    label: '通过',
    type: 'primary'
  },
  {
    value: 'REJECTED',
    label: '拒绝',
    type: 'error'
  },
  {
    value: 'HIDDEN',
    label: '隐藏',
    type: 'warning'
  },
  {
    value: 'ARCHIVED',
    label: '归档'
  },
  {
    value: 'DELETED',
    label: '删除'
  }
]

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
