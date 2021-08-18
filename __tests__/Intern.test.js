// using Intern constructor
const Intern = require('../lib/Intern');

// creates intern object
test('creates an Intern object', () => {
  const intern = new Intern('Mark', 77, 'mjos7@gmail.com', 'PSU');

  expect(intern.school).toEqual(expect.any(String));
});

test('gets employee school', () => {
  const intern = new Intern('Mark', 77, 'mjos7@gmail.com', 'PSU');

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

test('gets role of employee', () => {
  const intern = new Intern('Mark', 77, 'mjos7@gmail.com', 'PSU');

  expect(intern.getRole()).toEqual('Intern');
});
