import getStylish from '../src/formatters/stylish.js';
import getPlain from '../src/formatters/plain.js';
import getJson from '../src/formatters/json.js';
import {
  expectedPlainString,
  expectedStylishString,
  expectedJsonString,
  expectedCompareObj,
} from '../__fixtures__/expected.js';

test('Formatters tests', () => {
  expect(getStylish(expectedCompareObj)).toEqual(expectedStylishString);
  expect(getPlain(expectedCompareObj)).toEqual(expectedPlainString);
  expect(getJson(expectedCompareObj)).toEqual(expectedJsonString);
});
