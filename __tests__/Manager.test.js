// using Manager constructor
const Manager = require('../lib/Manager');

// creating manager object
test('creates an Manager object', () => {
  const manager = new Manager('Mark', 77, 'mjos7@gmail.com', 3234884020);

  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
  const manager = new Manager('Mark', 77, 'mjos7@gmail.com');

  expect(manager.getRole()).toEqual('Manager');
});
