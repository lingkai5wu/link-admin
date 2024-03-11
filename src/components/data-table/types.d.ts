import type { DataTableProps } from 'naive-ui'
import type { Type } from 'naive-ui/es/button/src/interface'
import type { Component } from 'vue'

interface DataTablePropsEx extends DataTableProps {
  columns: never
}

type RowDataWithId = Data & { id: number }

type DataTableActionFunc<T = Data> = (row: T) => Promise<void | null>

type DataTableActionComponentProps<T = Data> = {
  row: T
  tableData: T[]
  func?: DataTableActionFunc<T>
}

interface DataTableActionWithComponent<T = Data> {
  title: string
  type?: Type
  func: DataTableActionFunc<T>
  disabled?: ((row: T) => boolean) | boolean
  component: Component<DataTableActionComponentProps<T>>
}

interface DataTableActionWithoutComponent<T = RowDataWithId>
  extends DataTableActionWithComponent<T> {
  component?: never
}

type DataTableAction<T = Data> =
  | DataTableActionWithComponent<T>
  | DataTableActionWithoutComponent<T>

interface DataTableActions<T = Data> {
  [key: string]: DataTableAction<T>
}
