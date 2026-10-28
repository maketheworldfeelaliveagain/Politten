import type { Promise } from '../types'
import { parties } from '../data/parties'

export function filterPromises(items: Promise[], query: string): Promise[] {
  const normalized = query.trim().toLocaleLowerCase('lt-LT')
  if (!normalized) return items
  return items.filter((item) => {
    const party = parties.find((entry) => entry.id === item.partyId)
    return `${item.originalText} ${item.topic} ${party?.name ?? ''} ${party?.initials ?? ''}`.toLocaleLowerCase('lt-LT').includes(normalized)
  })
}
