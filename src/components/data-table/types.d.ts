import type { DataTableProps } from 'naive-ui'
import type { Type } from 'naive-ui/es/button/src/interface'
import type { Component } from 'vue'

interface DataTablePropsEx extends DataTableProps {
  columns: never
}

type RowDataWithId = Data & { id: number }

type DataTableActionFunc = (RowDataWithId) => Promise<void | null>

type DataTableActionComponentProps = {
  row: Data
  tableData: Data[]
  func: DataTableActionFunc
}

interface DataTableActionWithComponent {
  title: string
  type?: Type
  func: DataTableActionFunc
  disabled?: ((row: RowDataWithId) => boolean) | boolean
  component: Component<DataTableActionComponentProps>
}

interface DataTableActionWithoutComponent extends DataTableActionWithComponent {
  component?: never
}

type DataTableAction = DataTableActionWithComponent | DataTableActionWithoutComponent

interface DataTableActions {
  [key: string]: DataTableAction
}
