import type { Evidence, Party, Promise } from '../types'

export const VRK_LISTS_SOURCE = 'https://www.vrk.lt/kandidatu-sarasu-igarsintos-rinkimu-programos-ir-kandidatu-sarasai-sei-2024'
export const ILLUSTRATIVE_DATA_NOTICE = 'Visi pažadų tekstai, būsenos, paaiškinimai ir šaltinių pavyzdžiai šiame prototipe yra išgalvoti demonstraciniai duomenys. Jie nėra partijų citatos, tikri įrodymai ar politiniai vertinimai.'

// VRK 2024 m. kandidatų sąrašų registras: 14 partijų ir viena rinkimų koalicija.
export const parties: Party[] = [
  { id: 'tautos-ir-teisingumo-sajunga', name: 'Tautos ir teisingumo sąjunga (centristai, tautininkai)', slug: 'tautos-ir-teisingumo-sajunga', initials: 'TT', number: 1, dataSourceType: 'real' },
  { id: 'nacionalinis-susivienijimas', name: 'Nacionalinis susivienijimas', slug: 'nacionalinis-susivienijimas', initials: 'NS', number: 2, dataSourceType: 'real' },
  { id: 'lietuvos-socialdemokratu-partija', name: 'Lietuvos socialdemokratų partija', slug: 'lietuvos-socialdemokratu-partija', initials: 'LSDP', number: 3, dataSourceType: 'real' },
  { id: 'lietuvos-zaliuju-partija', name: 'Lietuvos žaliųjų partija', slug: 'lietuvos-zaliuju-partija', initials: 'LŽP', number: 4, dataSourceType: 'real' },
  { id: 'lietuvos-liaudies-partija', name: 'Lietuvos liaudies partija', slug: 'lietuvos-liaudies-partija', initials: 'LLP', number: 5, dataSourceType: 'real' },
  { id: 'lietuvos-regionu-partija', name: 'Lietuvos regionų partija', slug: 'lietuvos-regionu-partija', initials: 'LRP', number: 6, dataSourceType: 'real' },
  { id: 'lietuvos-valstieciu-ir-zaliuju-sajunga', name: 'Lietuvos valstiečių ir žaliųjų sąjunga', slug: 'lietuvos-valstieciu-ir-zaliuju-sajunga', initials: 'LVŽS', number: 8, dataSourceType: 'real' },
  { id: 'taikos-koalicija', name: 'Taikos koalicija (Darbo partija, Lietuvos krikščioniškosios demokratijos partija, Žemaičių partija)', slug: 'taikos-koalicija', initials: 'TK', number: 9, dataSourceType: 'real' },
  { id: 'laisve-ir-teisingumas', name: 'Partija „Laisvė ir teisingumas“', slug: 'laisve-ir-teisingumas', initials: 'LT', number: 10, dataSourceType: 'real' },
  { id: 'demokratu-sajunga-vardan-lietuvos', name: 'Demokratų sąjunga „Vardan Lietuvos“', slug: 'demokratu-sajunga-vardan-lietuvos', initials: 'DSVL', number: 11, dataSourceType: 'real' },
  { id: 'nemuno-ausra', name: 'Politinė partija „Nemuno Aušra“', slug: 'nemuno-ausra', initials: 'NA', number: 12, dataSourceType: 'real' },
  { id: 'tevynes-sajunga-lkd', name: 'Tėvynės sąjunga-Lietuvos krikščionys demokratai', slug: 'tevynes-sajunga-lkd', initials: 'TS-LKD', number: 13, dataSourceType: 'real' },
  { id: 'liberalu-sajudis', name: 'Liberalų sąjūdis', slug: 'liberalu-sajudis', initials: 'LS', number: 14, dataSourceType: 'real' },
  { id: 'laisves-partija', name: 'Laisvės partija', slug: 'laisves-partija', initials: 'LP', number: 16, dataSourceType: 'real' },
  { id: 'llrakss', name: 'Lietuvos lenkų rinkimų akcija-Krikščioniškų šeimų sąjunga', slug: 'llrakss', initials: 'LLRA-KŠS', number: 17, dataSourceType: 'real' },
]

const topics: string[][] = [
  ['Socialinė politika', 'Švietimas', 'Sveikatos apsauga'],
  ['Švietimas', 'Krašto apsauga', 'Ekonomika'],
  ['Socialinė politika', 'Ekonomika', 'Sveikatos apsauga'],
  ['Aplinkosauga', 'Energetika', 'Švietimas'],
  ['Regionai', 'Socialinė politika', 'Sveikatos apsauga'],
  ['Regionai', 'Transportas', 'Švietimas'],
  ['Žemės ūkis', 'Regionai', 'Aplinkosauga'],
  ['Socialinė politika', 'Ekonomika', 'Švietimas'],
  ['Ekonomika', 'Viešasis valdymas', 'Regionai'],
  ['Švietimas', 'Socialinė politika', 'Viešasis valdymas'],
  ['Ekonomika', 'Regionai', 'Sveikatos apsauga'],
  ['Krašto apsauga', 'Švietimas', 'Energetika'],
  ['Ekonomika', 'Švietimas', 'Skaitmenizacija'],
  ['Švietimas', 'Žmogaus teisės', 'Ekonomika'],
  ['Regionai', 'Švietimas', 'Socialinė politika'],
]
const texts: string[][] = [
  ['Sukurti ilgalaikę šeimų paramos programą su aiškiais finansavimo kriterijais.', 'Užtikrinti nemokamą popamokinį ugdymą mažesnes pajamas gaunančioms šeimoms.', 'Didinti pirminės sveikatos priežiūros paslaugų prieinamumą regionuose.'],
  ['Modernizuoti mokyklų infrastruktūrą mažesniuose miestuose.', 'Stiprinti Lietuvos gynybos pajėgumus ir visuotinį pasirengimą.', 'Sumažinti administracinę naštą smulkiajam verslui.'],
  ['Didinti mažiausias pajamas gaunančių gyventojų socialinę paramą.', 'Plėsti profesinio mokymo ir perkvalifikavimo galimybes.', 'Sutrumpinti eiles pas gydytojus regionų sveikatos įstaigose.'],
  ['Plėsti rūšiuojamų atliekų surinkimo tinklą savivaldybėse.', 'Remti daugiabučių namų energetinį atnaujinimą.', 'Kurti daugiau praktinių aplinkosaugos programų mokyklose.'],
  ['Stiprinti vietos sveikatos paslaugas ir ambulatorinę priežiūrą.', 'Gerinti mokyklinio transporto prieinamumą kaimiškose vietovėse.', 'Skatinti regionų verslo ir darbo vietų augimą.'],
  ['Atnaujinti regioninių kelių dangą ir tiltus.', 'Didinti viešojo transporto reisų skaičių tarp rajonų centrų.', 'Skirti daugiau lėšų mokyklų tinklo modernizavimui regionuose.'],
  ['Stiprinti vietos ūkių konkurencingumą ir trumpąsias maisto tiekimo grandines.', 'Pagerinti interneto prieigą atokesnėse gyvenvietėse.', 'Plėsti paramą tvariems ūkininkavimo metodams.'],
  ['Didinti mažiausias pensijas ir tikslinę paramą šeimoms.', 'Užtikrinti prieinamesnę profesinio mokymo sistemą.', 'Stiprinti nedirbančiųjų sugrįžimo į darbo rinką programas.'],
  ['Supaprastinti leidimų išdavimo procedūras smulkiajam verslui.', 'Sukurti savivaldybėms daugiau paskatų pritraukti investicijų.', 'Peržiūrėti viešųjų įstaigų valdymo procesus.'],
  ['Sukurti vieningą pagalbos sistemą mokymosi sunkumų turintiems vaikams.', 'Gerinti vaikų dienos paslaugų prieinamumą savivaldybėse.', 'Sukurti skaidresnę viešųjų sprendimų stebėseną.'],
  ['Didinti darbo vietų pasirinkimą mažesniuose miestuose.', 'Sutrumpinti pacientų laukimo laiką regionų gydymo įstaigose.', 'Atnaujinti savivaldybių viešąją infrastruktūrą.'],
  ['Didinti Lietuvos gynybos finansavimą ir kariuomenės aprūpinimą.', 'Gerinti mokytojų darbo sąlygas ir atlygio konkurencingumą.', 'Skatinti namų ūkių energetinį efektyvumą.'],
  ['Mažinti administracinius barjerus pradedantiems verslą.', 'Plėsti skaitmenines viešąsias paslaugas gyventojams.', 'Skatinti lankstesnes profesinio mokymosi galimybes suaugusiesiems.'],
  ['Užtikrinti vienodas galimybes gauti kokybišką švietimą.', 'Stiprinti žmogaus teisių apsaugą ir nediskriminavimą.', 'Sudaryti geresnes sąlygas jaunimo įsidarbinimui.'],
  ['Užtikrinti švietimo paslaugų prieinamumą atokesnėse savivaldybėse.', 'Plėsti jaunimo užimtumo ir neformaliojo ugdymo veiklas.', 'Gerinti socialinių paslaugų pasiekiamumą regionuose.'],
]
const statuses = ['in_progress', 'partially_fulfilled', 'cannot_verify', 'fulfilled', 'not_fulfilled', 'in_progress', 'partially_fulfilled', 'not_fulfilled', 'fulfilled', 'cannot_verify', 'in_progress', 'partially_fulfilled', 'not_fulfilled', 'fulfilled', 'in_progress'] as const
const updated = ['2025-10-15', '2025-11-03', '2025-09-18', '2025-12-02', '2025-08-21', '2025-11-19', '2025-10-07', '2025-12-11', '2025-09-29', '2025-11-26', '2025-10-30', '2025-12-05', '2025-09-12', '2025-11-14', '2025-10-23']
const explanations = [
  'Iliustracinis statusas pažymi demonstracinę vertinimo būseną. Tai nėra tikras pažado įgyvendinimo tyrimas.',
  'Iliustracinis statusas skirtas parodyti, kaip svetainėje būtų pateikiamas dalinis įgyvendinimas. Tai ne faktinė išvada.',
  'Šiam demonstraciniam įrašui priskirtas neapibrėžtumas. Realiame vertinime pažadui trūktų patikrintų įrodymų.',
  'Pavyzdinis statusas tik parodo viso įvykdymo atvaizdavimą. Šio pažado faktinė būklė netirta.',
  'Demonstracinė būsena nėra paremta faktiniu tyrimu. Ji parodyta tik kaip sąsajos pavyzdys.',
  'Pavyzdinė stebėsena vaizduoja vykstantį procesą. Jokie realūs įgyvendinimo duomenys nevertinti.',
]
const evidenceCopy = [
  ['Įstatymo projekto svarstymo eiga: demonstracinė ištrauka', 'Lietuvos Respublikos Seimas', 'Viešas dokumentas, pateikiamas tik kaip kortelės pavyzdys.', 'Iliustracinis kortelės pavyzdys. Šaltinis nėra patikrintas kaip susijęs su pažadu.'],
  ['Valstybės biudžeto apžvalga: demonstracinė ištrauka', 'Finansų ministerija', 'Vieša informacija parodyta tik maketo tikslais; patvirtinto dokumento nuoroda nepateikiama.', 'Iliustracinis įrodymo pavyzdys; turinys nebuvo sutikrintas su pažadu.'],
  ['Viešosios paslaugos pokyčių apžvalga: demonstracinė ištrauka', 'Lietuvos Respublikos Vyriausybė', 'Ištrauka sukurta sąsajai pademonstruoti, o ne kaip tikras institucijos teiginys.', 'Demonstracinė kortelė, realaus šaltinio ar pažado sąsaja nepatvirtinta.'],
]
const today = '2025-12-15'

export const promises: Promise[] = parties.flatMap((party, partyIndex) =>
  topics[partyIndex].map((topic, promiseIndex) => {
    const status = statuses[partyIndex]
    const id = `${party.id}-p${promiseIndex + 1}`
    const includeExampleEvidence = promiseIndex === 0 && partyIndex % 3 === 0
    return {
      id,
      partyId: party.id,
      originalText: texts[partyIndex][promiseIndex],
      topic,
      status,
      statusExplanation: explanations[(partyIndex + promiseIndex) % explanations.length],
      lastUpdated: updated[partyIndex],
      dataSourceType: 'illustrative' as const,
      evidenceIds: includeExampleEvidence ? [`evidence-${partyIndex + 1}`] : [],
    }
  }),
)

export const evidence: Evidence[] = parties.flatMap((party, partyIndex) => {
  if (partyIndex % 3 !== 0) return []
  const promise = promises.find((item) => item.partyId === party.id)
  if (!promise) return []
  const copy = evidenceCopy[(partyIndex / 3) % evidenceCopy.length]
  return [{
    id: `evidence-${partyIndex + 1}`,
    promiseId: promise.id,
    title: copy[0],
    publisher: copy[1],
    publicationDate: `2025-0${(partyIndex / 3) + 1}-12`,
    excerpt: copy[2],
    relevanceExplanation: copy[3],
    evidenceType: 'illustrative',
  }]
})

export { today as lastDemoUpdated }
