const Intern = require('../lib/Intern.js');
const Intern = require ('../lib/Intern.js');


// copied and edited from module 10 tests.js
test('creates an Intern object', () => {
    const Intern = new Intern('Rich', 8, 'r.arce118@hotmail.com', 'raarce118', 'RAA');
    expect(Intern.getSchool()).toEqual(expect.any(String));
     
   });
   
   test('create school', () => {
       const Intern = new Intern('Rich', 8, 'r.arce118@hotmail.com', 'RAA');
       expect(Enginner.getSchool()).toEqual(expect.stringContaining(Enginner.school.toString()));
     });
   
     
   test('gets role of Intern', () => {
       const Intern = new Intern('Rich', 8, 'r.arce118@hotmail.com', 'raarce118', 'RAA');
       expect(Intern.getRole()).toEqual('Intern');
     });