const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee('Mark');

  expect(employee.name).toBe('Dave');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toContain('@');
});
