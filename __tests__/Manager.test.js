const Manager = require("../lib/Manager");
const Manager = require("../lib/Manager");
jest.mock('../lib/Manager.js');


// copied and edited from module 10 tests.js
test('creates a Manager object', () => {
 const Manager = new Manager('Rich', 8, 'r.arce118@hotmail.com', 11);
 expect(Manager.getOfficeNumber()).toEqual(expect.any(Number));
  
});

test('create Manager role', () => {
    const Manager = new Manager('Rich', 8, 'r.arce118@hotmail.com', 11);
    expect(Manager.getRole()).toEqual('Manager');
});

  

