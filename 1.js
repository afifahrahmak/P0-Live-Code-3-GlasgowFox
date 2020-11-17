/**
 * ==============
 * Combine Names
 * ==============
 *
 * combineNames merupakan sebuah function yang akan menerima sebuah array of string sebagai parameternya.
 *
 * Fungsi ini akan menggabungkan setiap nama yang ada di dalam array tersebut menjadi satu buah string.
 *
 * Rules untuk menggabungkan nama-nama di dalam array tersebut adalah:
 * 1. Jika menggabungkan nama dengan nama paling akhir maka gunakan  `dan` sebagai pemisah nama.
 * 2. Jika tidak menggabungkan nama dengan nama paling akhir maka gunakan `, ` sebagai pemisah nama.
 * 3, Jika array names yang dikirimkan sebagai input merupakan array kosong maka tampilkan `Silahkan masukkan kumpulan nama`
 *
 * Contoh:
 *
 * input => ['Ruby', 'Kagura', 'Grock']
 *
 * Output => 'Ruby, Kagura dan Grock`
 *
 * Proses
 * 1. Ketika menggabungkan `Ruby` dan `Kagura` karena `Kagura` bukanlah nama paling akhir maka menggunakan `, ` ( Ruby, Kagura)
 * 2. Ketika menggabungkan `Kagura` dan `Grock` karena `Grock` adalaah nama paling akhir maka menggunakan `dan` (Kagura dan Grock)
 * 3. Jika digabungkan semuanya maka akan menghasilkan (Ruby, Kagura dan Grock)
 *
 * Notes:
 * - Dilarang menggunakan built in function apapun
 */

function combineNames(names) {
  // Insert your code here
}

console.log(combineNames(['Balmond', 'Ling', 'Pharsa', 'Khufra', 'Uranus'])) // 'Balmond, Ling, Pharsa, Khufra dan Uranus'
console.log(combineNames(['Ruby', 'Kagura', 'Grock'])) // 'Ruby, Kagura dan Grock'
console.log(combineNames(['Miya', 'Eudora'])) // 'Miya dan Eudora'
console.log(combineNames(['Lancelot'])) // 'Lancelot'
console.log(combineNames([])) // 'Silahkan masukkan kumpulan nama'

module.exports = combineNames
