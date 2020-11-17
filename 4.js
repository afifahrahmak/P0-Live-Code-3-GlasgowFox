/**
========
SIGN UP
========

signUp adalah sebuah function yang menerima 1 parameter bertipe object literal yaitu credentials.
Function ini akan mereturn sebuah string dimana jika:
 - email dan password sesuai dengan kriteria maka akan muncul pesan: "You have successful crated your account with username [username]"
 - email dan password tidak sesuai dengan kriteria maka akan muncul pesan: "There are something wrong, please check your email and password"
 - hanya password saja tidak sesuai dengan kriteria maka akan muncul pesan: "Password must have more than 6 characters and must contain characters alphabet, number and symbol"
 - hanya email saja tidak sesuai kriteria maka akan muncul pesan: "For sign up, using email with domain .com or .org or co.id and please make sure your email doesn't contain space"


 Function signUp WAJIB menggunakan modular function, silakan kamu mengerjakan sesuai dengan skeleton code yang sudah diberikan.

 - checkEmail: adalah function yang menerima input 1 parameter berupa string. Dimana pada function ini email tersebut akan dicek kriterianya:
  1. length of email before char '@' more than 3 characters
  2. email must not contain space
  3. email must contain @[provider].com atau @[provider].co.id atau @[provider].org (domain hanya boleh .com, .co.id atau .org)

  Function akan mereturn true jika semua kriteria terpenuhi, dan akan mereturn false jika salah satu kriteria tidak terpenuhi

- checkPassword: adalah fucntion yang menerima input 1 parameter berupa String. Dimana pada function ini password tersebut akan dicek kriterianya:
  1. Length of password more than 6 characters
  2. password must contain characters alphabet, number and symbol ~!@#$%%^&*()-+{}[]|/:;,.

  Function akan mereturn true jika semua kriteria terpenuhi, dan akan mereturn false jika salah satu kriteria tidak terpenuhi

RULES:
- DILARANG MENGGUNAKAN REGEX
- BOLEH MENGGUNAKAN BUILT IN FUNCTION .push dan .split, SELAIN ITU TIDAK DIPERBOLEHKAN
**/


function checkPassword(password) {
  // your code here
}

function checkEmail(email) {
  // your code here
}

function signUp(credentials) {
  let isEmail = checkEmail(credentials['email']);
  let isPassword = checkPassword(credentials['password']);

  //your code here
}

console.log(signUp({
  username: 'irsyahmardiah',
  password: 'ghtr56$W',
  email: 'irsyah@mail.com'
}));
//You have successful crated your account with username irsyahmardiah

console.log(signUp({
  username: 'devita',
  password: 'ghtr$Wh',
  email: 'devita@hacktiv8.co.id'
}));
//Password must have more than 6 characters and must contain characters alphabet, number and symbol

console.log(signUp({
  username: 'semmiverian',
  password: 'ghtr$Wh7',
  email: 'semmiverian@hacktiv8.ac.id'
}));
//For sign up, using email with domain .com or .org or co.id and please make sure your email doesn't contain space

console.log(signUp({
  username: 'bayu',
  password: 'iLoveJavaScript',
  email: 'bayu@hacktiv8.ac.id'
}));
//There are something wrong, please check your email and password

console.log(signUp({
  username: 'taufiq',
  password: 't4&f1q',
  email: 'tau@hacktiv8.org'
}));
//There are something wrong, please check your email and password

module.exports = { checkEmail, checkPassword, signUp }
