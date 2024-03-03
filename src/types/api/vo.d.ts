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
  label: string | null
  path: string | null
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

export interface RuntimeDataVO {
  userVO: UserVO
  menuVOList: MenuVO[]
}

export interface DisableServiceExceptionVO {
  service: string
  level: number
  disableTime: number
}

export interface ExceptionVO {
  className: string
  message: string
}

export interface MethodArgumentNotValidExceptionVO {
  invalidArgument: { [index: string]: string }
}

export type MenuTypeEnum = 'PARENT' | 'ROUTE' | 'LINK'

export type UserSexEnum = 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY' | 'NEUTRAL'
