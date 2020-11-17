const Restriction = require('hacktiv8-restriction')
const { checkEmail, checkPassword, signUp } = require('../4')

describe('Soal 4', () => {
  test('checkEmail function result (40)', () => {
    const result1 = checkEmail('irsyah@mail.com');
    const result2 = checkEmail('devita@hacktiv8.co');
    const result3 = checkEmail('tau@hacktiv8.co.id');
    const result4 = checkEmail('bayu@hacktiv8.org');
    const result5 = checkEmail('sem mi@hacktiv8.com');
    const result6 = checkEmail('devita@ha cktiv8.co.id');
    const result7 = checkEmail('devita@hacktiv8.co.id');

    expect(result1).toEqual(true);
    expect(result2).toEqual(false);
    expect(result3).toEqual(false);
    expect(result4).toEqual(true);
    expect(result5).toEqual(false);
    expect(result6).toEqual(false);
    expect(result7).toEqual(true);
  });

  test('checkPassword function result (30)', () => {
    const result1 = checkPassword('t4&f1q');
    const result2 = checkPassword('iLoveJavaScript');
    const result3 = checkPassword('ghtr$Wh#');
    const result4 = checkPassword('1234&%$#@');
    const result5 = checkPassword('ghtr$Wh7');

    expect(result1).toEqual(false);
    expect(result2).toEqual(false);
    expect(result3).toEqual(false);
    expect(result4).toEqual(false);
  })

  test('signUp function result (20)', () => {
    const result1 = signUp({
      username: 'irsyahmardiah',
      password: 'ghtr56$W',
      email: 'irsyah@mail.com'
    });

    const result2 = signUp({
      username: 'devita',
      password: 'ghtr$Wh',
      email: 'devita@hacktiv8.co.id'
    });

    const result3 = signUp({
      username: 'semmiverian',
      password: 'ghtr$Wh7',
      email: 'semmiverian@hacktiv8.ac.id'
    });

    const result4 = signUp({
      username: 'bayu',
      password: 'iLoveJavaScript',
      email: 'bayu@hacktiv8.ac.id'
    });

    const result5 = signUp({
      username: 'taufiq',
      password: 't4&f1q',
      email: 'tau@hacktiv8.org'
    });

    const result6 = signUp({
      username: 'devita',
      password: 'ghtr$Wh7r',
      email: 'devita@hacktiv8.co.id'
    });

    expect(result1).toEqual("You have successful crated your account with username irsyahmardiah");
    expect(result2).toEqual("Password must have more than 6 characters and must contain characters alphabet, number and symbol");
    expect(result3).toEqual("For sign up, using email with domain .com or .org or co.id and please make sure your email doesn't contain space");
    expect(result4).toEqual("There are something wrong, please check your email and password");
    expect(result5).toEqual("There are something wrong, please check your email and password");
    expect(result6).toEqual("You have successful crated your account with username devita");

  })

  test('check restriction (-20)', async () => {
    const checkRestriction = new Restriction('../4.answer.js');
    checkRestriction.rules = ['search', 'match'];
    const result = await checkRestriction.readCode();
    expect(result).toBe(null);
  });
})
