/* tslint:disable */

export interface Result<T> {
  code: number
  msg: string
  data: T
}

export interface MenuVO {
  id: number
  pid: number
  type: MenuTypeEnum
  label: string
  icon: string | null
  path: string | null
  component: string | null
}

export interface OssDirectPostObjectInfoVO {
  host: string
  expire: number
  ossAccessKeyId: string
  policy: string
  signature: string
}

export interface TokenInfoVO {
  tokenName: string
  tokenValue: string
}

export interface UserVO {
  id: number
  phone: string
  status: number
  nickname: string | null
  realname: string | null
  avatar: string | null
  sex: UserSexEnum | null
  createTime: Date
  groupList: string[] | null
}

export type MenuTypeEnum = 'PARENT' | 'ROUTE' | 'LINK'

export type UserSexEnum = 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY' | 'NEUTRAL'
