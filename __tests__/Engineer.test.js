// using Engineer constructor
const Engineer = require('../lib/Engineer');

// creating engineer object
test('creates an Engineer object', () => {
  const engineer = new Engineer('Mark', 77, 'mjos7@gmail.com', 'mjos7');

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github value', () => {
  const engineer = new Engineer('Mark', 77, 'mjos7@gmail.com', 'mjos7');

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

test('gets role of employee', () => {
  const engineer = new Engineer('Mark', 77, 'mjos7@gmail.com', 'mjos7');

  expect(engineer.getRole()).toEqual('Engineer');
});
