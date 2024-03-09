import type { DataTableProps } from 'naive-ui'
import type { Type } from 'naive-ui/es/button/src/interface'
import type { Component } from 'vue'

interface DataTablePropsEx extends DataTableProps {
  columns: never
}

type DataTableActionFunc = (data: Data) => Promise<void | null>

type DataTableActionComponentProps = {
  row: Data
  func: DataTableActionFunc
}

interface DataTableAction {
  title: string
  type?: Type
  func: DataTableActionFunc
  component?: Component<DataTableActionComponentProps>
}

interface DataTableActions {
  [key: string]: DataTableAction
}
