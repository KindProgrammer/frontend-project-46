import { expectedCompareObj } from '../__fixtures__/expected.js';
import foundDiff from '../src/foundDiff.js';
import parsFile from '../src/parsers.js';
import { getPreparedData } from './utils/utils.js';

test('foundDiff', () => {
  const jsonFilePath1 = getPreparedData('file1.json');
  const jsonFilePath2 = getPreparedData('file2.json');
  const yamlFilePath1 = getPreparedData('file1.yaml');
  const yamlFilePath2 = getPreparedData('file2.yaml');
  const ymlFilePath1 = getPreparedData('file1.yml');
  const ymlFilePath2 = getPreparedData('file2.yml');
  const jsonExt = 'json';
  const yamlExt = 'yaml';
  const ymlExt = 'yml';
  const jsonFile1 = parsFile(jsonFilePath1, jsonExt);
  const jsonFile2 = parsFile(jsonFilePath2, jsonExt);
  const yamlFile1 = parsFile(yamlFilePath1, yamlExt);
  const yamlFile2 = parsFile(yamlFilePath2, yamlExt);
  const ymlFile1 = parsFile(ymlFilePath1, ymlExt);
  const ymlFile2 = parsFile(ymlFilePath2, ymlExt);

  expect(foundDiff({}, {})).toEqual([]);
  expect(foundDiff(jsonFile1, jsonFile2)).toEqual(expectedCompareObj);
  expect(foundDiff(yamlFile1, yamlFile2)).toEqual(expectedCompareObj);
  expect(foundDiff(ymlFile1, ymlFile2)).toEqual(expectedCompareObj);
});
