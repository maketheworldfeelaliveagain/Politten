import assert from 'node:assert/strict'
import { parties, promises, evidence } from '../src/data/parties'
import { calculateProgress } from '../src/utils/calculateProgress'

assert.equal(parties.length, 15, 'Visi 15 registruoti rinkimų sąrašai')
assert.equal(promises.length, 45, 'Po tris pažadų pavyzdžius kiekvienam sąrašui')
assert.equal(new Set(promises.map((item) => item.partyId)).size, 15)
assert.ok(promises.every((item) => typeof item.originalText === 'string' && item.evidenceIds.every((id) => evidence.some((source) => source.id === id))))
assert.ok(promises.every((item) => item.dataSourceType === 'illustrative'))
const sample = calculateProgress([{status:'fulfilled'}, {status:'partially_fulfilled'}, {status:'in_progress'}, {status:'not_fulfilled'}, {status:'cannot_verify'}] as never)
assert.deepEqual(sample, {percentage:44, assessable:4, excluded:1})
assert.deepEqual(calculateProgress([{status:'cannot_verify'}] as never), {percentage:null, assessable:0, excluded:1})
console.log('Duomenų ir progreso skaičiavimo patikra sėkminga: 15 sąrašų, 45 pažadų pavyzdžiai, 5 įrodymų kortelės.')
