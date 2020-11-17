/**
 * ===============
 * Absence Report
 * ===============
 *
 * Function ini akan Menghitung jumlah Hadir, Izin dan Absen setiap minggu yang terdapat 5 hari
 *
 * menambahkan jumlah "Hadir" jika terdapat huruf "V",
 * menambahkan jumlah "Izin" jika terdapat huruf "I",
 * menambahkan jumlah "Absen" jika terdapat huruf "A",
 *
 * contoh :
 *  @input : [
        ['Week1','V','V',"I","V","A"],
        ['Week2','V','A',"I","V","V"],
        ['Week3','V','I',"V","V","I"],
        ['Week4','V','V',"I","V","V"],
    ]
 *  @output : {
        Week1: { Hadir: 3, Izin: 1, Absen: 1 },
        Week2: { Hadir: 3, Izin: 1, Absen: 1 },
        Week3: { Hadir: 3, Izin: 2, Absen: 0 },
        Week4: { Hadir: 4, Izin: 1, Absen: 0 }
    }
  * Notes:
 * - Dilarang menggunakan built in function apapun
 */



function absenceReport(data) {
  
  let countV = 0;
  let countI = 0;
  let countA = 0;
  
  let obj = {
  
    Week1: { Hadir: `${countV}`, Izin: `${countI}`, Absen: `${countA}` },
    Week2: { Hadir: `${countV}`, Izin: `${countI}`, Absen: `${countA}` },
    Week3: { Hadir: `${countV}`, Izin: `${countI}`, Absen: `${countA}` },
    Week4: { Hadir: `${countV}`, Izin: `${countI}`, Absen: `${countA}` },
  
  }


   for (let i = 0; i < data.length; i++)  {
     for (let j = 0; j < data.length[i]; j++)  {
       console.log(data[i], data [i][j]);
       if (data[i][j] === 'v')  {
         countV++
        //  console.log(countV);
         if (data[i][j] === 'I')  {
           countI++
           if (data[i][j] === 'A')  {
             countA++
           }
         }
       }




     }

   }
   return obj
}


console.log(absenceReport([
    ['Week1', 'V', 'V', "I", "V", "A"],
    ['Week2', 'V', 'A', "I", "V", "V"],
    ['Week3', 'V', 'I', "V", "V", "I"],
    ['Week4', 'V', 'V', "I", "V", "V"],
]));
/*
{
  Week1: { Hadir: 3, Izin: 1, Absen: 1 },
  Week2: { Hadir: 3, Izin: 1, Absen: 1 },
  Week3: { Hadir: 3, Izin: 2, Absen: 0 },
  Week4: { Hadir: 4, Izin: 1, Absen: 0 }
}
*/


// console.log(absenceReport([
//     ['Week1', 'V', 'I', "I", "V", "A"],
//     ['Week2', 'A', 'A', "I", "V", "V"]
// ]));
/*
{
  Week1: { Hadir: 2, Izin: 2, Absen: 1 },
  Week2: { Hadir: 2, Izin: 1, Absen: 2 }
}
*/


module.exports = absenceReport
