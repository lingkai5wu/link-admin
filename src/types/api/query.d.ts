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

export type MenuTypeEnum = 'PARENT' | 'ROUTE' | 'LINK'
