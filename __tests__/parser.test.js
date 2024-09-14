import { expectedParsObj } from '../__fixtures__/expected.js';
import parsFile from '../src/parsers.js';
import { getPreparedData } from './utils/utils.js';

test('Parser', () => {
  const jsonData = getPreparedData('file1.json');
  const yamlData = getPreparedData('file1.yaml');

  expect(parsFile(jsonData, 'json')).toEqual(expectedParsObj);
  expect(parsFile(yamlData, 'yaml')).toEqual(expectedParsObj);
});
