import type { DataTableProps } from 'naive-ui'
import type { Component } from 'vue'

interface DataTablePropsEx extends DataTableProps {
  columns: never
}

type DataTableActionComponentProps = {
  row: Data
}

interface DataTableAction {
  title: string
  func?: () => Promise<void>
  component?: Component<DataTableActionComponentProps>
}

interface DataTableActions {
  [key: string]: DataTableAction
}
