# Politten

Lietuviškas pilietinių technologijų prototipas, skirtas sekti 2024 m. Lietuvos Respublikos Seimo rinkimų pažadus ir jų įgyvendinimo įrodymus.

## Paleidimas

```bash
npm install
npm run dev
```

## Patikra ir produkcinis build

```bash
npm run typecheck
npm run build
npm run preview
```

## Duomenų kilmė

Rinkimų sąrašų pavadinimai paimti iš VRK 2024 m. spalio 13 d. daugiamandatės apygardos rezultatų protokolo. Pažadų įrašai yra aiškiai pažymėti iliustraciniais pavyzdžiais; jie nėra partijų citatos ar faktiniai įgyvendinimo vertinimai. `src/data/evidence.ts` paliktas tuščias, kol nėra patikrintų šaltinių ir ištraukų.

Duomenys saugomi vietiniuose TypeScript failuose. Backend, duomenų bazės, autentifikavimo ar tiesioginių AI integracijų nėra.
