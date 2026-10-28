import type { Party } from '../types'

// Įtrauktos visos 15 rinkimų protokole nurodytų kandidatų sąrašų; koalicija pateikta kaip rinkimų sąrašas.
export const parties: Party[] = [
  { id: 'tautos-teisingumo-sajunga', name: 'Tautos ir teisingumo sąjunga (centristai, tautininkai)', slug: 'tautos-ir-teisingumo-sajunga', initials: 'TT', dataSourceType: 'real' },
  { id: 'nacionalinis-susivienijimas', name: 'Nacionalinis susivienijimas', slug: 'nacionalinis-susivienijimas', initials: 'NS', dataSourceType: 'real' },
  { id: 'lietuvos-socialdemokratu-partija', name: 'Lietuvos socialdemokratų partija', slug: 'lietuvos-socialdemokratu-partija', initials: 'LSDP', dataSourceType: 'real' },
  { id: 'lietuvos-zaliuju-partija', name: 'Lietuvos žaliųjų partija', slug: 'lietuvos-zaliuju-partija', initials: 'LŽP', dataSourceType: 'real' },
  { id: 'lietuvos-liaudies-partija', name: 'Lietuvos liaudies partija', slug: 'lietuvos-liaudies-partija', initials: 'LLP', dataSourceType: 'real' },
  { id: 'lietuvos-regionu-partija', name: 'Lietuvos regionų partija', slug: 'lietuvos-regionu-partija', initials: 'LRP', dataSourceType: 'real' },
  { id: 'lietuvos-valstieciu-ir-zaliuju-sajunga', name: 'Lietuvos valstiečių ir žaliųjų sąjunga', slug: 'lietuvos-valstieciu-ir-zaliuju-sajunga', initials: 'LVŽS', dataSourceType: 'real' },
  { id: 'taikos-koalicija', name: 'Taikos koalicija (Darbo partija, Lietuvos krikščioniškosios demokratijos partija, Žemaičių partija)', slug: 'taikos-koalicija', initials: 'TK', dataSourceType: 'real' },
  { id: 'laisve-ir-teisingumas', name: 'Partija „Laisvė ir teisingumas“', slug: 'laisve-ir-teisingumas', initials: 'LIT', dataSourceType: 'real' },
  { id: 'demokratu-sajunga-vardan-lietuvos', name: 'Demokratų sąjunga „Vardan Lietuvos“', slug: 'demokratu-sajunga-vardan-lietuvos', initials: 'DSVL', dataSourceType: 'real' },
  { id: 'nemuno-ausra', name: 'Politinė partija „Nemuno Aušra“', slug: 'nemuno-ausra', initials: 'NA', dataSourceType: 'real' },
  { id: 'tevynes-sajunga-lkd', name: 'Tėvynės sąjunga-Lietuvos krikščionys demokratai', slug: 'tevynes-sajunga-lkd', initials: 'TS-LKD', dataSourceType: 'real' },
  { id: 'liberalu-sajudis', name: 'Liberalų sąjūdis', slug: 'liberalu-sajudis', initials: 'LS', dataSourceType: 'real' },
  { id: 'laisves-partija', name: 'Laisvės partija', slug: 'laisves-partija', initials: 'LP', dataSourceType: 'real' },
  { id: 'llrakss', name: 'Lietuvos lenkų rinkimų akcija-Krikščioniškų šeimų sąjunga', slug: 'llrakss', initials: 'LLRA', dataSourceType: 'real' },
]
