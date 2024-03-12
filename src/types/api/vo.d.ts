/* tslint:disable */

export interface Result<T> {
  readonly code: number
  readonly msg: string
  readonly data: T
}

export interface MenuVO {
  readonly id: number
  readonly pid: number
  readonly type: MenuTypeEnum
  readonly label: string
  readonly path: string | null
}

export interface OssDirectPostObjectInfoVO {
  readonly host: string
  readonly expire: number
  readonly ossAccessKeyId: string
  readonly policy: string
  readonly signature: string
}

export interface TokenInfoVO {
  readonly tokenName: string
  readonly tokenValue: string
}

export interface UserVO {
  readonly id: number
  readonly phone: string
  readonly status: UserStatusEnum
  readonly nickname: string | null
  readonly realname: string | null
  readonly avatar: string | null
  readonly sex: UserSexEnum | null
  readonly createTime: Date
  readonly groupList: string[] | null
}

export interface RuntimeDataVO {
  readonly userVO: UserVO
  readonly menuVOList: MenuVO[]
}

export interface DisableServiceExceptionVO {
  readonly service: string
  readonly level: number
  readonly disableTime: number
}

export interface ExceptionVO {
  readonly className: string
  readonly message: string
}

export interface MethodArgumentNotValidExceptionVO {
  readonly invalidArgument: { [index: string]: string }
}

export type MenuTypeEnum = 'PARENT' | 'ROUTE' | 'LINK'

export type UserStatusEnum = 'UNCONFIRMED' | 'CONFIRMED' | 'BANNED' | 'DELETED'

export type UserSexEnum = 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY' | 'NEUTRAL'
