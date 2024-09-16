import fs from 'fs';
import path from 'path';
import parseData from './parsers.js';
import foundDiff from './genDiff.js';
import getFormatt from './formatters/index.js';

const getfileExtension = (filePath) => filePath.split('.').at(-1);
const getDataForParse = (filePath) => fs.readFileSync(path.resolve(filePath), 'utf8');
const dataParse = (dataForParse, ext) => parseData(dataForParse, ext);

const genDiff = (firstObjPath, secondObjPath, format) => {
  const firstObjExt = getfileExtension(firstObjPath);
  const firstObjData = getDataForParse(firstObjPath);
  const parseDataFirstObj = dataParse(firstObjData, firstObjExt);

  const secondObjExt = getfileExtension(secondObjPath);
  const secondObjData = getDataForParse(secondObjPath);
  const parseDataSecondObj = dataParse(secondObjData, secondObjExt);
  const difference = foundDiff(parseDataFirstObj, parseDataSecondObj);

  const ansver = Object.keys(difference).length === 0 ? '{}' : getFormatt(difference, format);

  return ansver;
};

export default genDiff;
