import type { DataTableProps } from 'naive-ui'
import type { Type } from 'naive-ui/es/button/src/interface'
import type { Component } from 'vue'

interface DataTablePropsEx extends DataTableProps {
  columns: never
}

type RowDataWithId = Data & { id: number }

type RowActionFunc<T = Data> = (row: T) => Promise<void | null>
type TopActionFunc = () => Promise<void | null>

type ActionComponentProps<T = Data> = {
  row?: T
}

interface RowActionWithComponent<T = Data> {
  title: string
  type?: Type
  permission: string | string[] | null
  disabled?: ((row: T) => boolean) | boolean
  component: Component<ActionComponentProps<T>>
}

interface RowActionWithoutComponent<T = RowDataWithId> extends RowActionWithComponent<T> {
  component?: never
  func: RowActionFunc<T>
}

type RowAction<T = any> = RowActionWithComponent<T> | RowActionWithoutComponent<T>

type RowActions<T = any> = Record<string, RowAction<T>>

interface TopActionWithComponent extends RowActionWithComponent {
  disabled?: boolean
  component: Component
}

interface TopActionWithoutComponent extends TopActionWithComponent {
  component?: never
  func: TopActionFunc<T>
}

type TopAction = TopActionWithComponent | TopActionWithoutComponent
type TopActions = Record<string, TopAction>

type Action = RowAction | TopAction
type Actions = RowActions | TopActions
type ActionWithComponent = RowActionWithComponent | TopActionWithComponent
