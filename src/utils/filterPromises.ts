import type { Promise } from '../types'

export function filterPromises(items: Promise[], query: string): Promise[] {
  const normalized = query.trim().toLocaleLowerCase('lt-LT')
  if (!normalized) return items
  return items.filter((item) =>
    `${item.originalText} ${item.topic}`.toLocaleLowerCase('lt-LT').includes(normalized),
  )
}
