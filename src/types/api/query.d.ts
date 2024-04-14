/* tslint:disable */

export interface PageDTO {
  current?: number | null
  size?: number | null
}

export interface AnimalSaveDTO {
  name?: string | null
  status?: AnimalStatusEnum | null
  categoryId?: number | null
  breed?: string | null
  areaId?: number | null
  sex?: AnimalSexEnum | null
  dateOfBirth?: number | null
  color?: string | null
  feature?: string | null
  health?: string | null
  weight?: number | null
  rfid?: string | null
  avatar?: string | null
  banner?: string | null
  attachment?: string[] | null
}

export interface AnimalUpdateDTO {
  id?: number | null
  name?: string | null
  status?: AnimalStatusEnum | null
  categoryId?: number | null
  breed?: string | null
  areaId?: number | null
  sex?: AnimalSexEnum | null
  dateOfBirth?: number | null
  color?: string | null
  feature?: string | null
  health?: string | null
  weight?: number | null
  rfid?: string | null
  avatar?: string | null
  banner?: string | null
  attachment?: string[] | null
}

export interface AreaSaveDTO {
  label?: string | null
  description?: string | null
  locations?: LocationSaveDTO[] | null
}

export interface AreaUpdateDTO {
  id?: number | null
  label?: string | null
  description?: string | null
  locations?: LocationSaveOrUpdateDTO[] | null
}

export interface AuthOtpLoginDTO {
  phone?: string | null
  otp?: string | null
}

export interface BatchUpdateManyToManyDTO<T> {
  targetIdsToInsert?: T[] | null
  targetIdsToDelete?: T[] | null
}

export interface CategorySaveDTO {
  label?: string | null
  description?: string | null
}

export interface CategoryUpdateDTO {
  id?: number | null
  label?: string | null
  description?: string | null
}

export interface DonationSaveDTO {
  donorName?: string | null
  donorUserId?: number | null
  contact?: string | null
  date?: number | null
  description?: string | null
  financialTransactionId?: number | null
  materialMovementId?: number | null
}

export interface DonationUpdateDTO {
  id?: number | null
  donorName?: string | null
  donorUserId?: number | null
  contact?: string | null
  date?: number | null
  description?: string | null
  financialTransactionId?: number | null
  materialMovementId?: number | null
}

export interface EntityOrderUpdateDTO {
  id?: number | null
  pid?: number | null
  sortOrder?: number | null
}

export interface FinancialAccountSaveDTO {
  name?: string | null
  status?: EntityStatusEnum | null
  userId?: number | null
  balance?: number | null
  description?: string | null
}

export interface FinancialAccountUpdateDTO {
  id?: number | null
  name?: string | null
  status?: EntityStatusEnum | null
  userId?: number | null
  balance?: number | null
  description?: string | null
}

export interface FinancialTransactionSaveDTO {
  date?: number | null
  operatorUserId?: number | null
  accountId?: number | null
  categoryId?: number | null
  amount?: number | null
  description?: string | null
  attachment?: string[] | null
}

export interface FinancialTransactionUpdateDTO {
  id?: number | null
  date?: number | null
  operatorUserId?: number | null
  accountId?: number | null
  categoryId?: number | null
  amount?: number | null
  description?: string | null
  attachment?: string[] | null
}

export interface ForumSaveDTO {
  label?: string | null
  status?: EntityStatusEnum | null
  description?: string | null
  notice?: string | null
  header?: string | null
}

export interface ForumUpdateDTO {
  id?: number | null
  label?: string | null
  status?: EntityStatusEnum | null
  description?: string | null
  notice?: string | null
  header?: string | null
}

export interface LocationSaveDTO {
  lng?: number | null
  lat?: number | null
}

export interface LocationSaveOrUpdateDTO {
  id?: number | null
  lng?: number | null
  lat?: number | null
}

export interface MaterialMovementSaveDTO {
  stockId?: number | null
  movementType?: MaterialMovementTypeEnum | null
  operatorUserId?: number | null
  referenceUserId?: number | null
  quantity?: number | null
  description?: string | null
  attachment?: string[] | null
}

export interface MaterialMovementUpdateDTO {
  id?: number | null
  stockId?: number | null
  movementType?: MaterialMovementTypeEnum | null
  operatorUserId?: number | null
  referenceUserId?: number | null
  quantity?: number | null
  description?: string | null
  attachment?: string[] | null
}

export interface MaterialPurchaseSaveDTO {
  movementId?: number | null
  financialTransactionId?: number | null
  procurementUserId?: number | null
  status?: EntityStatusEnum | null
  totalAmount?: number | null
  supplier?: string | null
  orderNumber?: string | null
  description?: string | null
  attachment?: string[] | null
}

export interface MaterialPurchaseUpdateDTO {
  id?: number | null
  movementId?: number | null
  financialTransactionId?: number | null
  procurementUserId?: number | null
  status?: EntityStatusEnum | null
  totalAmount?: number | null
  supplier?: string | null
  orderNumber?: string | null
  description?: string | null
  attachment?: string[] | null
}

export interface MaterialSaveDTO {
  categoryId?: number | null
  status?: EntityStatusEnum | null
  name?: string | null
  specification?: string | null
  unit?: string | null
  content?: string | null
  attachment?: string[] | null
}

export interface MaterialStockSaveDTO {
  materialId?: number | null
  warehouseId?: number | null
  min?: number | null
  max?: number | null
}

export interface MaterialStockUpdateDTO {
  id?: number | null
  materialId?: number | null
  warehouseId?: number | null
  min?: number | null
  max?: number | null
}

export interface MaterialUpdateDTO {
  id?: number | null
  categoryId?: number | null
  status?: EntityStatusEnum | null
  name?: string | null
  specification?: string | null
  unit?: string | null
  content?: string | null
  attachment?: string[] | null
}

export interface MaterialWarehouseSaveDTO {
  locationId?: number | null
  label?: string | null
  description?: string | null
  keeperUserId?: number | null
  contact?: string | null
}

export interface MaterialWarehouseUpdateDTO {
  id?: number | null
  locationId?: number | null
  label?: string | null
  description?: string | null
  keeperUserId?: number | null
  contact?: string | null
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

export interface OssGetObjectUrlGenerateDTO {
  objectName?: string | null
  imageProcessStyle?: OssImageProcessStyleEnum | null
}

export interface PermissionUpdateDTO {
  id?: number | null
  description?: string | null
}

export interface PostSaveDTO {
  forumId?: number | null
  title?: string | null
  status?: EntityStatusEnum | null
  contact?: string | null
  content?: string | null
  attachment?: string[] | null
}

export interface PostUpdateDTO {
  id?: number | null
  forumId?: number | null
  title?: string | null
  status?: EntityStatusEnum | null
  contact?: string | null
  content?: string | null
  attachment?: string[] | null
}

export interface RoleSaveDTO {
  code?: string | null
  name?: string | null
  description?: string | null
}

export interface RoleUpdateDTO {
  id?: number | null
  code?: string | null
  name?: string | null
  description?: string | null
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
  status?: UserStatusEnum | null
  nickname?: string | null
  realname?: string | null
  avatar?: string | null
  sex?: UserSexEnum | null
}

export interface AnimalQuery {
  name?: string | null
  status?: AnimalStatusEnum | null
  categoryId?: number | null
  breed?: string | null
  areaId?: number | null
  sex?: AnimalSexEnum | null
  dateOfBirth?: number | null
  color?: string | null
  feature?: string | null
  health?: string | null
  rfid?: string | null
}

export interface MenuQuery {
  type?: MenuTypeEnum | null
  label?: string | null
  path?: string | null
}

export interface PostQuery {
  forumId?: number | null
  title?: string | null
  status?: EntityStatusEnum | null
  userId?: number | null
  content?: string | null
}

export interface UserQuery {
  phone?: string | null
  status?: UserStatusEnum | null
  nickname?: string | null
  realname?: string | null
  sex?: UserSexEnum | null
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

export type OssImageProcessStyleEnum = 'NONE' | 'NORMAL' | 'AVATAR'

export type UserStatusEnum = 'UNCONFIRMED' | 'CONFIRMED' | 'BANNED' | 'DELETED'

export type UserSexEnum = 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY' | 'NEUTRAL'
