import { expectedParsObj } from '../__fixtures__/expected.js';
import parsFile from '../src/parsers.js';
import getFixturePath from './utils/utils.js';

test('Parser', () => {
  const jsonFilePath1 = getFixturePath('file1.json');
  const yamlFilePath1 = getFixturePath('file1.yaml');

  expect(parsFile(jsonFilePath1)).toEqual(expectedParsObj);
  expect(parsFile(yamlFilePath1)).toEqual(expectedParsObj);
});
