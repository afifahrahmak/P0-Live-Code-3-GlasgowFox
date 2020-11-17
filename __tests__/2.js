/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/
const absenceReport = require('../2')
const Restriction = require('hacktiv8-restriction')
/*
========================================================================================================
ABAIKAN BLOCK CODE INI
========================================================================================================
*/

/*
========================================================================================================
PASTIKAN SOLUSI YANG DITULIS SESUAI DENGAN SKENARIO DIBAWAH INI
========================================================================================================
*/
describe('Soal 2', () => {
  it('should return requirement output (100)', async () => {
    const result1 = absenceReport([
      ['Week1','V','V',"I","V","A"],
      ['Week2','V','A',"I","V","V"],
      ['Week3','V','I',"V","V","I"],
      ['Week4','V','V',"I","V","V"],
    ])
    expect(result1).toEqual({
      Week1: { Hadir: 3, Izin: 1, Absen: 1 },
      Week2: { Hadir: 3, Izin: 1, Absen: 1 },
      Week3: { Hadir: 3, Izin: 2, Absen: 0 },
      Week4: { Hadir: 4, Izin: 1, Absen: 0 }
    })

    const result2 = absenceReport([
      ['Week1','V','V',"I","V","A"],
      ['Week2','V','A',"I","V","V"],
      ['Week3','V','I',"V","V","I"],
      ['Week4','V','V',"I","V","V"],
      ['Week5','V','V',"I","V","V"],
    ])
    expect(result2).toEqual({
      Week1: { Hadir: 3, Izin: 1, Absen: 1 },
      Week2: { Hadir: 3, Izin: 1, Absen: 1 },
      Week3: { Hadir: 3, Izin: 2, Absen: 0 },
      Week4: { Hadir: 4, Izin: 1, Absen: 0 },
      Week5: { Hadir: 4, Izin: 1, Absen: 0 }
    })

    const result3 = absenceReport([
      ['Week1','V','V',"I","V","A"],
      ['Week2','V','A',"I","V","V"]
    ])
    expect(result3).toEqual({
      Week1: { Hadir: 3, Izin: 1, Absen: 1 },
      Week2: { Hadir: 3, Izin: 1, Absen: 1 }
    })

  })
  it('should check restriction rules (-30)', async () => {
    const checkRestriction = new Restriction('../2.js');
    const restrictedUse = await checkRestriction.readCode();
    expect(restrictedUse).toBe(null);
  })
})
