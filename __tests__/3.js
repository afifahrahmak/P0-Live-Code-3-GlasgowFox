const searchPatients = require('../3')
const Restriction = require('hacktiv8-restriction')

describe('Soal 3', () => {
  test('Requirement Output (100)', () => {
    const result1 = searchPatients('diagnosis', 'covid-19')
    const result2 = searchPatients('symptoms', 'weight loss')
    const result3 = searchPatients('age', 20)
    const result4 = searchPatients('gender', 'female')
    const result5 = searchPatients('name', 'Evans')

    expect(result1).toEqual(
      [
        {
          name: 'John',
          age: 40,
          gender: 'male',
          symptoms: [ 'fever', 'dry cough', 'tiredness' ],
          diagnosis: 'covid-19'
        },
        {
          name: 'Evans',
          age: 25,
          gender: 'male',
          symptoms: [ 'fever', 'sore throat', 'difficulty breathing' ],
          diagnosis: 'covid-19'
        }
      ]
    )

    expect(result2).toEqual(
      [
        {
          name: 'Melee',
          age: 17,
          gender: 'female',
          symptoms: [
            'weight loss',
            'night sweats',
            'headache',
            'enlarged lymph nodes'
          ],
          diagnosis: 'blood cancer'
        }
      ]
    )

    expect(result3).toEqual(
      'No data'
    )

    expect(result4).toEqual(
      [
        {
          name: 'Angela',
          age: 27,
          gender: 'female',
          symptoms: [ 'fever', 'fatigue', 'weaknees' ],
          diagnosis: 'hemorrhagic fevers'
        },
        {
          name: 'Melee',
          age: 17,
          gender: 'female',
          symptoms: [
            'weight loss',
            'night sweats',
            'headache',
            'enlarged lymph nodes'
          ],
          diagnosis: 'blood cancer'
        }
      ]
    )

    expect(result5).toEqual(
      [
        {
          name: 'Evans',
          age: 25,
          gender: 'male',
          symptoms: [ 'fever', 'sore throat', 'difficulty breathing' ],
          diagnosis: 'covid-19'
        }
      ]
    )
  })
})
