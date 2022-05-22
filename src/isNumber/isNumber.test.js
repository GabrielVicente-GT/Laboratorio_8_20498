/* eslint-disable linebreak-style */
// eslint-disable-next-line import/named
import { ValidarNumero } from './isNumber'

describe('Dado un numero', () => {
  it('retorna si es numero o no: ', () => { expect(ValidarNumero(1)).toBe(true) })
  it('retorna si es numero o no: ', () => { expect(ValidarNumero('1')).toBe(true) })
  it('retorna si es numero o no: ', () => { expect(ValidarNumero('a')).toBe(false) })
})
