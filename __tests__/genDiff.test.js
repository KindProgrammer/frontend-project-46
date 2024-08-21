import { expectedStringFromJsons } from '../__fixtures__/expected.js';
import { foundDiff } from '../src/genDiff.js';
import parsFile from '../src/parser.js';
import getFixturePath from './utils/utils.js';

test('foundDiff', () => {
  const jsonFilePath1 = getFixturePath('file1.json');
  const jsonFilePath2 = getFixturePath('file2.json');
  const jsonFile1 = parsFile(jsonFilePath1);
  const jsonFile2 = parsFile(jsonFilePath2);

  expect(foundDiff({}, {})).toEqual('{}');
  expect(foundDiff(jsonFile1, jsonFile2)).toEqual(expectedStringFromJsons);
});
