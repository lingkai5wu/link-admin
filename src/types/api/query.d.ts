/* tslint:disable */

export interface AuthOtpLoginDTO {
  phone?: string | null
  otp?: string | null
}

export interface MenuSaveDTO {
  pid?: number | null
  type?: MenuTypeEnum | null
  label?: string | null
  path?: string | null
}

export interface MenuUpdateDTO {
  id?: number | null
  pid?: number | null
  type?: MenuTypeEnum | null
  label?: string | null
  path?: string | null
}

export interface UserSaveDTO {
  phone?: string | null
  status?: UserStatusEnum | null
  nickname?: string | null
  realname?: string | null
  avatar?: string | null
  sex?: UserSexEnum | null
}

export interface UserUpdateDTO {
  id?: number | null
  phone?: string | null
  status?: UserStatusEnum | null
  nickname?: string | null
  realname?: string | null
  avatar?: string | null
  sex?: UserSexEnum | null
}

export type MenuTypeEnum = 'PARENT' | 'ROUTE' | 'LINK'

export type UserStatusEnum = 'UNCONFIRMED' | 'CONFIRMED' | 'BANNED' | 'DELETED'

export type UserSexEnum = 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY' | 'NEUTRAL'
