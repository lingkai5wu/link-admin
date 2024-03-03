/* tslint:disable */

export interface AuthLoginQuery {
  phone: string
  smsCode: string
}

export interface MenuSaveQuery {
  pid: number
  type: MenuTypeEnum
  label: string
  path?: string | null
}

export interface MenuUpdateQuery {
  id: number
  pid?: number | null
  type?: MenuTypeEnum | null
  label?: string | null
  path?: string | null
}

export type MenuTypeEnum = 'PARENT' | 'ROUTE' | 'LINK'
