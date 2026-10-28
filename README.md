# Politten

Politten — lietuviškas, reaguojantis V1 prototipas 2024 m. Seimo rinkimų sąrašų programiniams pažadams stebėti.

## Paleidimas

```bash
npm install
npm run dev
```

Naršyklėje atverkite Vite parodytą vietinį adresą.

## Patikra ir produkcinė versija

```bash
npm run typecheck
npm run build
npm run preview
```

Statinis `dist/` katalogas tinka Vercel ar Netlify diegimui. Projekto `build` komanda sugeneruoja produkcinį katalogą; Vite SPA maršrutams hostinge įjunkite visų kelių perrašymą į `/index.html`.

## Funkcijos

- Pagrindinis puslapis su 15 rinkimų sąrašų kortelėmis, pažadų skaičiais, vertinamų pažadų progreso rodikliu.
- Pažadų paieška pagal tekstą, temą ir partiją bei filtrai pagal sąrašą, statusą ir politikos temą; filtrų būsena saugoma URL užklausoje.
- Sąrašų profiliai su pažadais, temomis, būsenomis ir įgyvendinimo progreso skaičiavimu.
- Pažado detalės, paaiškinimas, atnaujinimo data bei demonstracinės įrodymų kortelės be sugalvotų nuorodų į tikrus dokumentus.
- Metodikos puslapis, mobiliesiems pritaikytas maketas, semantiški valdikliai ir aiškios demonstracinių duomenų žymos.

## Duomenų kilmė ir ribotumai

15 registruotų daugiamandatės apygardos rinkimų sąrašų bei jų numeriai paremti [VRK oficialiu kandidatų sąrašų ir programų puslapiu](https://www.vrk.lt/kandidatu-sarasu-igarsintos-rinkimu-programos-ir-kandidatu-sarasai-sei-2024). Iš jų 14 yra partijų sąrašai, o vienas — partijų koalicijos sąrašas. Antraštėje pateikiami oficialūs sąrašo pavadinimai.

Kiekvienas pažado tekstas yra aiškiai pažymėtas iliustraciniu: pažadai nėra tikslios rinkimų programų citatos, o statusai, paaiškinimai, datos ir įrodymų kortelės nėra faktinių politinių veiksmų ar šaltinių tyrimo rezultatas. Tikros nuorodos, citatos ar vertinimai neišgalvojami. Nepainiokite pavyzdinių procentų su partijų reitingu.

Procento formulė: įvykdyta 100 %, iš dalies įvykdyta 50 %, vykdoma 25 %, neįvykdyta 0 %. „Negalima patikrinti“ neįtraukiama. Jei nėra vertinamų pažadų, vietoj procento rodoma „Insufficient data“ / „Nepakanka duomenų“.

## Technologijos ir ribos

React, Vite, TypeScript, Tailwind CSS, Lucide React, React Router. Vietiniai TS duomenys `src/data/parties.ts`; nėra serverio, DB, autentifikavimo, AI skambučių ar automatinių atnaujinimų.
