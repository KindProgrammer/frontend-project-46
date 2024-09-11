import getStylish from '../src/formatters/stylish.js';
import getPlain from '../src/formatters/plain.js';
import {
  expectedPlainString,
  expectedStylishString,
  expectedCompareObj,
} from '../__fixtures__/expected.js';

test('Formatters tests', () => {
  expect(getStylish(expectedCompareObj)).toEqual(expectedStylishString);
  expect(getPlain(expectedCompareObj)).toEqual(expectedPlainString);
});
