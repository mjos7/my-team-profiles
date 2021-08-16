const Manager = require('../lib/Manager');

test('creates an engineer object', () => {
  const manager = new Manager('Ian');

  expect(manager.name).toBe('Ian');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toContain('@');
  expect(manager.officeNumber).toEqual(expect.any(Number));
});
