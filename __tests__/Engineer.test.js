const Engineer = require('../lib/Engineer.js');
const Engineer = require('../lib/Engineer.js');
jest.mock('../lib/Engineer.js');


// copied and edited from module 10 tests.js
test('creates an Engineer object', () => {
 const Engineer = new Engineer('Rich', 8, 'r.arce118@hotmail.com', 'raarce118');
 expect(Engineer.getGithub()).toEqual(expect.any(String));
  
});

test('create github', () => {
    const Engineer = new Engineer('Rich', 8, 'r.arce118@hotmail.com', 'RAA');
    expect(Enginner.getGithub()).toEqual(expect.stringContaining(Enginner.github.toString()));
  });

  
test('gets role of Enginner', () => {
    const Engineer = new Engineer('Rich', 8, 'r.arce118@hotmail.com', 'raarce118');
    expect(Engineer.getRole()).toEqual('Enginner');
  });

