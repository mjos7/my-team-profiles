const Employee = require('../lib/Employee');

test('creates an engineer object', () => {
  const employee = new Employee('Jessica');

  expect(employee.name).toBe('Jessica');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toContain('@');
});
