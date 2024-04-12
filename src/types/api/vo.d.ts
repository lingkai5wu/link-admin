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

export interface DonationBasicVO {
  readonly id: number
  readonly donorName: string
  readonly donorUser: UserBasicVO | null
  readonly contact: string | null
  readonly date: number
  readonly description: string | null
}

export interface DonationVO {
  readonly id: number
  readonly donorName: string
  readonly donorUserId: number | null
  readonly contact: string | null
  readonly date: number
  readonly description: string | null
  readonly financialTransactionId: number | null
  readonly materialMovementId: number | null
}

export interface FinancialAccountBasicVO {
  readonly id: number
  readonly name: string
  readonly status: EntityStatusEnum
  readonly user: UserBasicVO
  readonly balance: number
  readonly description: string | null
}

export interface FinancialAccountVO {
  readonly id: number
  readonly name: string
  readonly status: EntityStatusEnum
  readonly userId: number
  readonly balance: number
  readonly description: string | null
}

export interface FinancialTransactionBasicVO {
  readonly id: number
  readonly date: number
  readonly operatorUser: UserBasicVO
  readonly category: string
  readonly amount: number
  readonly description: string | null
  readonly attachment: string[] | null
}

export interface FinancialTransactionVO {
  readonly id: number
  readonly date: number
  readonly operatorUserId: number
  readonly accountId: number
  readonly categoryId: number
  readonly amount: number
  readonly description: string | null
  readonly attachment: string[] | null
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

export interface MaterialBasicVO {
  readonly id: number
  readonly category: string
  readonly status: EntityStatusEnum
  readonly name: string
  readonly specification: string | null
  readonly unit: string
}

export interface MaterialMovementBasicVO {
  readonly id: number
  readonly stockId: number
  readonly materialId: number
  readonly materialName: string
  readonly materialUnit: string
  readonly warehouseId: number
  readonly warehouseLabel: string
  readonly movementType: MaterialMovementTypeEnum
  readonly quantity: number
  readonly description: string | null
  readonly createTime: number
}

export interface MaterialMovementVO {
  readonly id: number
  readonly stockId: number
  readonly movementType: MaterialMovementTypeEnum
  readonly operatorUserId: number
  readonly referenceUserId: number | null
  readonly quantity: number
  readonly description: string | null
  readonly attachment: string[] | null
  readonly createTime: number
}

export interface MaterialPurchaseBasicVO {
  readonly id: number
  readonly movementId: number
  readonly financialTransactionId: number | null
  readonly status: EntityStatusEnum
  readonly totalAmount: number
  readonly description: string | null
}

export interface MaterialPurchaseVO {
  readonly id: number
  readonly movementId: number
  readonly financialTransactionId: number | null
  readonly procurementUserId: number
  readonly status: EntityStatusEnum
  readonly totalAmount: number
  readonly supplier: string | null
  readonly orderNumber: string | null
  readonly description: string | null
  readonly attachment: string[] | null
}

export interface MaterialStockBasicVO {
  readonly id: number
  readonly material: MaterialBasicVO
  readonly warehouse: string
  readonly contact: string | null
  readonly quantity: number
  readonly min: number | null
  readonly max: number | null
}

export interface MaterialStockVO {
  readonly id: number
  readonly materialId: number
  readonly warehouseId: number
  readonly quantity: number
  readonly min: number | null
  readonly max: number | null
}

export interface MaterialVO {
  readonly id: number
  readonly categoryId: number
  readonly status: EntityStatusEnum
  readonly name: string
  readonly specification: string | null
  readonly unit: string
  readonly content: string | null
  readonly attachment: string[] | null
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

export type MaterialMovementTypeEnum =
  | 'PROCUREMENT'
  | 'BORROWING'
  | 'DONATION'
  | 'LENDING'
  | 'USAGE'
  | 'LOST'
  | 'TRANSFER'
  | 'SCRAP'

export type MenuTypeEnum = 'PARENT' | 'ROUTE' | 'LINK'

export type UserStatusEnum = 'UNCONFIRMED' | 'CONFIRMED' | 'BANNED' | 'DELETED'

export type UserSexEnum = 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY' | 'NEUTRAL'
