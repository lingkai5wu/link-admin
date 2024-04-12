type Data = Record<string, any>

type DataWithId = Data & { id: number }

type SortableEntity = {
  id: number
  pid?: number
  label: string
  sortOrder: number | null
}

type OptionalEntity = {
  id: number
  label: string
  description?: string | null
}
