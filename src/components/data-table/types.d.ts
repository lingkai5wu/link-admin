import type { DataTableProps } from 'naive-ui'

interface DataTablePropsEx extends DataTableProps {
  columns: never
}

interface DataTableAction {
  title: string
}

interface DataTableActions {
  [key: string]: DataTableAction
}
