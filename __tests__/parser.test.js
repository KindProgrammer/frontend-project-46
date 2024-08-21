import { expectedParsJsonObj } from '../__fixtures__/expected.js';
import parsFile from '../src/parser.js';
import getFixturePath from './utils/utils.js';

test('Parser', () => {
    const jsonFilePath1 = getFixturePath('file1.json');
  
    expect(parsFile(jsonFilePath1)).toEqual(expectedParsJsonObj);
});

