/* tslint:disable */

// Generated using typescript-generator version 3.2.1263 on 2024-02-23 14:27:01.

export interface Result<T> {
  code: number
  msg: string
  data: T
}

export interface AuthLoginQuery {
  phone: string
  smsCode: string
}

export interface MenuSaveQuery {
  pid: number
  type: MenuTypeEnum
  label: string
  icon?: string
  path?: string
  component?: string
}

export interface MenuUpdateQuery {
  id: number
  pid?: number
  type?: MenuTypeEnum
  label?: string
  icon?: string
  path?: string
  component?: string
}

export interface MenuVO {
  id: number
  pid: number
  type: MenuTypeEnum
  label: string
  icon?: string
  path?: string
  component?: string
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
  nickname?: string
  realname?: string
  avatar?: string
  sex?: UserSexEnum
  createTime: Date
  groupList?: string[]
}

export type MenuTypeEnum = 'PARENT' | 'ROUTE' | 'LINK'

export type UserSexEnum = 'MALE' | 'FEMALE' | 'OTHER'
