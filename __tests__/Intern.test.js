const Intern = require('../lib/Intern');

test('creates an intern object', () => {
  const intern = new Intern('Tie', 'Stanford');

  expect(intern.name).toBe('Tie');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toContain('@');
  expect(intern.school).toBe('Stanford');
});
