import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import expectedStringFromJsons from '../__fixtures__/expected.js';
import { foundDiff } from '../src/genDiff.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) => {
  const fixturePath = path.join(__dirname, '..', '__fixtures__', filename);

  return fixturePath;
};
const jsonFilePath1 = getFixturePath('file1.json');
const jsonFilePath2 = getFixturePath('file2.json');

test('foundDiff', () => {
  expect(foundDiff({}, {})).toEqual('{}');
  expect(foundDiff(jsonFilePath1, jsonFilePath2)).toEqual(expectedStringFromJsons);
});
