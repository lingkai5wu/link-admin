/* tslint:disable */

export interface AuthLoginQuery {
  phone?: string | null
  smsCode?: string | null
}

export interface MenuSaveQuery {
  pid?: number | null
  type?: MenuTypeEnum | null
  label?: string | null
  path?: string | null
}

export interface MenuUpdateQuery {
  id?: number | null
  pid?: number | null
  type?: MenuTypeEnum | null
  label?: string | null
  path?: string | null
}

export interface UserSaveQuery {
  phone?: string | null
  password?: string | null
  wxOpenid?: string | null
  wxUnionid?: string | null
  status?: UserStatusEnum | null
  nickname?: string | null
  realname?: string | null
  avatar?: string | null
  sex?: UserSexEnum | null
}

export interface UserUpdateQuery {
  id?: number | null
  phone?: string | null
  password?: string | null
  wxOpenid?: string | null
  wxUnionid?: string | null
  status?: UserStatusEnum | null
  nickname?: string | null
  realname?: string | null
  avatar?: string | null
  sex?: UserSexEnum | null
}

export type MenuTypeEnum = 'PARENT' | 'ROUTE' | 'LINK'

export type UserStatusEnum = 'UNCONFIRMED' | 'CONFIRMED' | 'BANNED' | 'DELETED'

export type UserSexEnum = 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY' | 'NEUTRAL'
