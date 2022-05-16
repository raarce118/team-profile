const Employee = require('../lib/Employee.js');
const Employee = require('../lib/Employee.js');
jest.mock('../lib/Employee.js');


// copied and edited from module 10 tests.js
test('creates an Employee object', () => {
  const Employee = new Employee('Rich', 8, 'r.arce118@hotmail.com',);

  expect(Employee.name).toEqual(expect.any(String));
  expect(Employee.id).toEqual(expect.any(Number));
  expect(Employee.email).toEqual(expect.any(String));


});

test('gets name of employee', () => {
    const Employee = new Employee('Rich', 8, 'r.arce118@hotmail.com');
    expect(Employee.getName()).toEqual(expect.any(String));
  });

  
test('gets ID of employee', () => {
    const Employee = new Employee('Rich', 8, 'r.arce118@hotmail.com');
    expect(Employee.getId()).toEqual(expect.any(Number));
  });

test('gets email of employee', () => {
    const Employee = new Employee('Rich', 8, 'r.arce118@hotmail.com');
    expect(Employee.getEmail()).toEqual(expect.any(String));
  });

test('gets Role of employee', () => {
    const Employee = new Employee('Rich', 8, 'r.arce118@hotmail.com');
    expect(Employee.getRole()).toEqual(expect.any(String));
  });


  