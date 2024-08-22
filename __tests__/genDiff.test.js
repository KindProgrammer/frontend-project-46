import { expectedStringFromJsons } from '../__fixtures__/expected.js';
import { foundDiff } from '../src/genDiff.js';
import parsFile from '../src/parsers.js';
import getFixturePath from './utils/utils.js';

test('foundDiff', () => {
  const jsonFilePath1 = getFixturePath('file1.json');
  const jsonFilePath2 = getFixturePath('file2.json');
  const yamlFilePath1 = getFixturePath('file1.yaml');
  const yamlFilePath2 = getFixturePath('file2.yaml');
  const ymlFilePath1 = getFixturePath('file1.yml');
  const ymlFilePath2 = getFixturePath('file2.yml');
  const jsonFile1 = parsFile(jsonFilePath1);
  const jsonFile2 = parsFile(jsonFilePath2);
  const yamlFile1 = parsFile(yamlFilePath1);
  const yamlFile2 = parsFile(yamlFilePath2);
  const ymlFile1 = parsFile(ymlFilePath1);
  const ymlFile2 = parsFile(ymlFilePath2);

  expect(foundDiff({}, {})).toEqual('{}');
  expect(foundDiff(jsonFile1, jsonFile2)).toEqual(expectedStringFromJsons);
  expect(foundDiff(yamlFile1, yamlFile2)).toEqual(expectedStringFromJsons);
  expect(foundDiff(ymlFile1, ymlFile2)).toEqual(expectedStringFromJsons);
});
