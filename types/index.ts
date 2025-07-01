export type Todo = {
  id: string
  title: string
  description?: string
  priority: 0 | 1 | 2
  due?: string
}
