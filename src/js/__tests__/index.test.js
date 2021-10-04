import Validator from '../../index';


test('correct name', () => {
  const expected = new Validator('qwe123-qwe_wqe').validateUsername();
  expect(expected).toBe('qwe123-qwe_wqe');
});
test('dont correct name', () => {
  expect(() => {
    new Validator('1231-sdasda').validateUsername();
  }).toThrow();
});
