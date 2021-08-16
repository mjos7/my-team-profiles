const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
  const engineer = new Engineer('Mark');

  expect(engineer.name).toBe('Mark');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toContain('@');
});
