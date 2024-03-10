type Data = Record<string, any>

type Nullable<T> = {
  [P in keyof T]?: T[P] | null
}
