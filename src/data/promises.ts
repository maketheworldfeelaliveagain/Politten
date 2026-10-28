import type { Promise } from '../types'

// Pažadų vertinimai sąmoningai iliustraciniai: tikri pažadai ir jų įgyvendinimas dar netirti.
export const promises: Promise[] = [
  {
    id: 'demo-socialines-apsaugos-pazadas',
    partyId: 'lietuvos-socialdemokratu-partija',
    originalText: 'Iliustracinis įrašas: čia bus pateiktas patikrintas rinkimų programos pažadas.',
    topic: 'Socialinė politika',
    status: 'cannot_verify',
    statusExplanation: 'Demonstracinis įrašas. Pažadas, įrodymai ir vertinimas dar nepatikrinti.',
    lastUpdated: '2026-10-28',
    dataSourceType: 'illustrative',
    evidenceIds: [],
  },
  {
    id: 'demo-svietimo-pazadas',
    partyId: 'tevynes-sajunga-lkd',
    originalText: 'Iliustracinis įrašas: šioje vietoje bus tiksli citata iš rinkimų programos.',
    topic: 'Švietimas',
    status: 'cannot_verify',
    statusExplanation: 'Demonstracinis įrašas. Tikras programos tekstas ir jo įgyvendinimo įrodymai nevertinti.',
    lastUpdated: '2026-10-28',
    dataSourceType: 'illustrative',
    evidenceIds: [],
  },
]
