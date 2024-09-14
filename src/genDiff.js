import _ from 'lodash';

const getUniqueSortedKeys = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  const ollUniqueKeys = [...new Set([...obj1Keys, ...obj2Keys])].sort();

  return ollUniqueKeys;
};

const foundDiff = (obj1, obj2) => getUniqueSortedKeys(obj1, obj2).map((key) => {
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

export default foundDiff;
