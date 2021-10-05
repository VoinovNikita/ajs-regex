import Validator from '../../index';


test('correct name', () => {
  const expected = new Validator('qwe123-qwe_wqe').validateUsername();
  expect(expected).toBe('qwe123-qwe_wqe');
});
test('the name has more than 3 digitse', () => {
  expect(() => {
    new Validator('sdas1234da').validateUsername();
  }).toThrow();
});

test('starts with a number', () => {
  expect(() => {
    new Validator('14-sdasda').validateUsername();
  }).toThrow();
});

test('starts with a -', () => {
  expect(() => {
    new Validator('-sdasda').validateUsername();
  }).toThrow();
});

test('starts with a _', () => {
  expect(() => {
    new Validator('_sdasda').validateUsername();
  }).toThrow();
});
test('starts with a Cyrillic', () => {
  expect(() => {
    new Validator('фывфвф').validateUsername();
  }).toThrow();
});

test('finish with a number', () => {
  expect(() => {
    new Validator('qwew12').validateUsername();
  }).toThrow();
});

test('finish with a -', () => {
  expect(() => {
    new Validator('qwew-').validateUsername();
  }).toThrow();
});
test('finish with a _', () => {
  expect(() => {
    new Validator('qwew_').validateUsername();
  }).toThrow();
});


