type Data = Record<string, any>

type DataWithId = Data & { id: number }

type SortableEntity = {
  id: number
  label: string
  sortOrder: number | null
}
