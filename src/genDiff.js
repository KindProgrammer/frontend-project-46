import _ from 'lodash';
import parseFile from './parsers.js';
import getStylish from './formatters/stylish.js';
import getPlain from './formatters/plain.js';
import getJson from './formatters/json.js';

const getUniqueSortedKeys = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  const ollUniqueKeys = [...new Set([...obj1Keys, ...obj2Keys])].sort();

  return ollUniqueKeys;
};

const foundDiff = (obj1, obj2) => {
  const ollUniqueKeys = getUniqueSortedKeys(obj1, obj2);
  let result;

  if (ollUniqueKeys.length === 0) {
    result = {};
  } else {
    result = ollUniqueKeys.map((key) => {
      const value1 = obj1[key];
      const value2 = obj2[key];

      if (Object.hasOwn(obj1, key) && !Object.hasOwn(obj2, key)) {
        return { key, value1, status: 'deleted' };
      }

      if (!Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
        return { key, value2, status: 'added' };
      }

      if (_.isObject(value1) && _.isObject(value2)) {
        return { key, children: foundDiff(value1, value2), status: 'nested' };
      }

      if (_.isEqual(value1, value2)) {
        return { key, value1, status: 'unchanged' };
      }

      return {
        key, value1, value2, status: 'changed',
      };
    });
  }

  return result;
};

const showDiff = (firstObjPath, secondObjPath, options) => {
  const obj1 = parseFile(firstObjPath);
  const obj2 = parseFile(secondObjPath);
  const { format } = options;
  const difference = foundDiff(obj1, obj2);

  let ansver;

  if (Object.keys(difference).length === 0) {
    ansver = '{}';
  } else {
    switch (format) {
      case 'plain':
        ansver = getPlain(difference);
        break;

      case 'json':
        ansver = getJson(difference);
        break;

      default:
        ansver = getStylish(difference);
        break;
    }
  }

  console.log(ansver);
};

export { foundDiff, showDiff };
