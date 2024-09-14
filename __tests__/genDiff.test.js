import genDiff from '../src/index.js';
import { getFixturePath } from './utils/utils.js';
import {
  expectedStylishString,
  expectedJsonString,
  expectedPlainString,
} from '../__fixtures__/expected.js';

test('gendiff', () => {
  const optionJson = { format: 'json' };
  const optionPlain = { format: 'plain' };
  const jsonFilePath1 = getFixturePath('file1.json');
  const jsonFilePath2 = getFixturePath('file2.json');
  const yamlFilePath1 = getFixturePath('file1.yaml');
  const yamlFilePath2 = getFixturePath('file2.yaml');

  expect(genDiff(jsonFilePath1, jsonFilePath2)).toEqual(expectedStylishString);
  expect(genDiff(yamlFilePath1, yamlFilePath2, optionJson)).toEqual(expectedJsonString);
  expect(genDiff(yamlFilePath1, yamlFilePath2, optionPlain)).toEqual(expectedPlainString);
});
