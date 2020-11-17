/**
 * ===================
 *   SEARCH PATIENTS
 * ===================
 * 
 * Rumah Sakit Siluman menawari Anda sebuah project untuk membuat aplikasi pencarian data pasien. Database dari pasien-pasien
 * telah tersedia, tugas Anda adalah membuat logika untuk menampilkan data-data pasien yang memiliki kriteria sesuai inputan user.
 * 
 * Contoh 1
 * criteria: 'age'
 * value: 20
 * output: 'No data'
 * 
 * Contoh 2
 * criteria: 'symptoms'
 * value: 'weight loss'
 * output: 
 * [
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
 * ]
 * contoh 3
 * criteria: 'diagnosis'
 * value: 'covid-19'
 * output: 
 * [
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
 * ]
 * 
 * Parameter criteria diambil dari salah satu key di object patient dan parameter value adalah value dari key object tersebut.
 * Output berupa data dengan struktur array of object
 * Notes:
 * - Hanya built in functions untuk pengecekan tipe data dan .push yang boleh digunakan
*/

function searchPatients(criteria, value) {

    // variabel patientsData jangan diubah
    let patientsData = [
        {
            name: 'John',
            age: 40,
            gender: 'male',
            symptoms: ['fever', 'dry cough', 'tiredness'],
            diagnosis: 'covid-19'
        },
        {
            name: 'Angela',
            age: 27,
            gender: 'female',
            symptoms: ['fever', 'fatigue', 'weaknees'],
            diagnosis: 'hemorrhagic fevers'
        },
        {
            name: 'Evans',
            age: 25,
            gender: 'male',
            symptoms: ['fever', 'sore throat', 'difficulty breathing'],
            diagnosis: 'covid-19'
        },
        {
            name: 'Justin',
            age: 32,
            gender: 'male',
            symptoms: ['fatigue', 'dizziness', 'weakness'],
            diagnosis: 'hemorrhagic fevers'   
        },
        {
            name: 'Melee',
            age: 17,
            gender: 'female',
            symptoms: ['weight loss', 'night sweats', 'headache', 'enlarged lymph nodes'],
            diagnosis: 'blood cancer'             
        }
    ]

    // write your imagination here ...
}

console.log(searchPatients('diagnosis', 'covid-19'))
/* 
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
*/
console.log(searchPatients('symptoms', 'weight loss'))
/* 
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
*/
console.log(searchPatients('age', 20)) // 'No data'


module.exports = searchPatients
