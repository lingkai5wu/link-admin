import type { DataTableProps } from 'naive-ui'
import type { Type } from 'naive-ui/es/button/src/interface'
import type { Component } from 'vue'

interface DataTablePropsEx extends DataTableProps {
  columns: never
}

type DataTableActionComponentProps = {
  row: Data
  func: (data: Data) => Promise<void | null>
}

interface DataTableAction {
  title: string
  type?: Type
  func: (data?: any) => Promise<void | null>
  component?: Component<DataTableActionComponentProps>
}

interface DataTableActions {
  [key: string]: DataTableAction
}
