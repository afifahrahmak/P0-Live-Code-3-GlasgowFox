const combineNames = require('./../1')

describe('Test soal 1', () => {
  it('should return output as expected (100)', () => {
    const result = combineNames(['Balmond', 'Ling', 'Pharsa', 'Khufra', 'Uranus'])
    const result2 = combineNames(['Ruby', 'Kagura', 'Grock'])
    const result3 = combineNames(['Miya', 'Eudora'])
    const result4 = combineNames(['Lancelot'])
    const result5 = combineNames([])

    expect(result).toBe('Balmond, Ling, Pharsa, Khufra dan Uranus')
    expect(result2).toBe('Ruby, Kagura dan Grock')
    expect(result3).toBe('Miya dan Eudora')
    expect(result4).toBe('Lancelot')
    expect(result5).toBe('Silahkan masukkan kumpulan nama')
  })
})
