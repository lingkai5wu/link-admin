import type { DataTableProps } from 'naive-ui'
import type { Component } from 'vue'

interface DataTablePropsEx extends DataTableProps {
  columns: never
}

interface DataTableAction {
  title: string
  component?: Component
}

interface DataTableActions {
  [key: string]: DataTableAction
}
