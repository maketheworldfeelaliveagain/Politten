import type { Promise, PromiseStatus } from '../types'

const weight: Record<PromiseStatus, number | null> = {
  fulfilled: 100,
  partially_fulfilled: 50,
  in_progress: 25,
  not_fulfilled: 0,
  cannot_verify: null,
}

export function calculateProgress(items: Promise[]): { percentage: number | null; assessable: number; excluded: number } {
  const assessableItems = items.filter((item) => weight[item.status] !== null)
  if (assessableItems.length === 0) {
    return { percentage: null, assessable: 0, excluded: items.length }
  }
  const total = assessableItems.reduce((sum, item) => sum + (weight[item.status] ?? 0), 0)
  return {
    percentage: Math.round(total / assessableItems.length),
    assessable: assessableItems.length,
    excluded: items.length - assessableItems.length,
  }
}
