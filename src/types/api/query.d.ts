/* tslint:disable */

export interface AuthLoginQuery {
  phone: string
  smsCode: string
}

export interface MenuSaveQuery {
  pid: number
  type: MenuTypeEnum
  path?: string | null
}

export interface MenuUpdateQuery {
  id: number
  pid?: number | null
  type?: MenuTypeEnum | null
  path?: string | null
}

export type MenuTypeEnum = 'PARENT' | 'ROUTE' | 'LINK'
