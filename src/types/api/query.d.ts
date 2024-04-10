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

export interface EntityOrderUpdateDTO {
  id?: number | null
  pid?: number | null
  sortOrder?: number | null
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

export interface PermissionUpdateDTO {
  id?: number | null
  description?: string | null
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

export type MenuTypeEnum = 'PARENT' | 'ROUTE' | 'LINK'

export type UserStatusEnum = 'UNCONFIRMED' | 'CONFIRMED' | 'BANNED' | 'DELETED'

export type UserSexEnum = 'MALE' | 'FEMALE' | 'OTHER' | 'PREFER_NOT_TO_SAY' | 'NEUTRAL'
