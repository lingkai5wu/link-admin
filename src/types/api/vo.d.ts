/* tslint:disable */

export interface Result<T> {
  readonly code: number
  readonly msg: string
  readonly data: T
}

export interface PageVO<T> {
  readonly current: number
  readonly size: number
  readonly total: number
  readonly records: T[]
}

export interface AnimalBasicVO {
  readonly id: number
  readonly name: string | null
  readonly status: AnimalStatusEnum
  readonly categoryId: string
  readonly breed: string | null
  readonly areaId: string | null
  readonly sex: AnimalSexEnum
  readonly dateOfBirth: number | null
  readonly avatar: string | null
  readonly banner: string | null
}

export interface AnimalVO {
  readonly id: number
  readonly name: string | null
  readonly status: AnimalStatusEnum
  readonly categoryId: number
  readonly breed: string | null
  readonly areaId: number | null
  readonly sex: AnimalSexEnum
  readonly dateOfBirth: number | null
  readonly color: string | null
  readonly feature: string | null
  readonly health: string | null
  readonly weight: number | null
  readonly rfid: string | null
  readonly avatar: string | null
  readonly banner: string | null
  readonly attachment: string[] | null
  readonly createTime: number
  readonly updateTime: number | null
}

export interface AreaVO {
  readonly id: number
  readonly label: string
  readonly description: string | null
  readonly locations: LocationVO[] | null
}

export interface CategoryVO {
  readonly id: number
  readonly label: string
  readonly description: string | null
}

export interface ForumBasicVO {
  readonly id: number
  readonly label: string
  readonly status: EntityStatusEnum
  readonly description: string | null
  readonly sortOrder: number | null
  readonly createTime: number
}

export interface ForumVO {
  readonly id: number
  readonly label: string
  readonly status: EntityStatusEnum
  readonly description: string | null
  readonly notice: string | null
  readonly header: string | null
  readonly sortOrder: number | null
  readonly createTime: number
}

export interface LocationVO {
  readonly id: number
  readonly lng: number
  readonly lat: number
}

export interface MaterialWarehouseBasicVO {
  readonly id: number
  readonly label: string
  readonly description: string | null
  readonly keeperUser: UserBasicVO | null
  readonly contact: string | null
}

export interface MaterialWarehouseVO {
  readonly id: number
  readonly locationId: number | null
  readonly label: string
  readonly description: string | null
  readonly keeperUserId: number | null
  readonly contact: string | null
}

export interface MenuVO {
  readonly id: number
  readonly pid: number
  readonly type: MenuTypeEnum
  readonly label: string
  readonly path: string | null
  readonly sortOrder: number | null
}

export interface OssDirectPostObjectInfoVO {
  readonly host: string
  readonly expire: number
  readonly maxSize: number
  readonly ossAccessKeyId: string
  readonly policy: string
  readonly signature: string
}

export interface PermissionVO {
  readonly id: number
  readonly code: string
  readonly description: string | null
}

export interface RoleVO {
  readonly id: number
  readonly code: string
  readonly name: string
  readonly description: string | null
}

export interface TokenInfoVO {
  readonly tokenName: string
  readonly tokenValue: string
}

export interface UserBasicVO {
  readonly id: number
  readonly phone: string
  readonly nickname: string | null
  readonly avatar: string | null
}

export interface UserVO {
  readonly id: number
  readonly phone: string
  readonly status: UserStatusEnum
  readonly nickname: string | null
  readonly realname: string | null
  readonly avatar: string | null
  readonly sex: UserSexEnum | null
  readonly createTime: number
}

export interface RuntimeDataVO {
  readonly userVO: UserVO
  readonly menuVOs: MenuVO[]
  readonly permissionCodes: string[]
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

export type AnimalStatusEnum = 'NORMAL' | 'MISSING' | 'ADOPTED' | 'DECEASED'

export type AnimalSexEnum = 'MALE' | 'FEMALE' | 'OTHER' | 'UNKNOWN'

export type EntityStatusEnum =
  | 'DRAFT'
  | 'PENDING'
  | 'LOCKED'
  | 'APPROVED'
  | 'REJECTED'
  | 'HIDDEN'
  | 'ARCHIVED'
  | 'DELETED'

export type MenuTypeEnum = 'PARENT' | 'ROUTE' | 'LINK'

export type UserStatusEnum = 'UNCONFIRMED' | 'CONFIRMED' | 'BANNED' | 'DELETED'

export type UserSexEnum = 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY' | 'NEUTRAL'
