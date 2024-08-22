import _ from 'lodash';
import parseFile from './parsers.js';

const foundDiff = (obj1, obj2) => {
  let result = '{';
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  const ollUniqueKeys = [...new Set([...obj1Keys, ...obj2Keys])].sort();

  if (ollUniqueKeys.length === 0) {
    return '{}';
  }

  ollUniqueKeys.forEach((key) => {
    if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
      if (_.isEqual(obj1[key], obj2[key])) {
        result = `${result}\n    ${key}: ${obj1[key]}`;
      } else {
        result = `${result}\n  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`;
      }
    } else if (Object.hasOwn(obj1, key)) {
      result = `${result}\n  - ${key}: ${obj1[key]}`;
    } else {
      result = `${result}\n  + ${key}: ${obj2[key]}`;
    }
  });

  result = `${result}\n}`;

  return result;
};

const showDiff = (firstObjPath, secondObjPath) => {
  const obj1 = parseFile(firstObjPath);
  const obj2 = parseFile(secondObjPath);

  console.log(foundDiff(obj1, obj2));
};

export { foundDiff, showDiff };
