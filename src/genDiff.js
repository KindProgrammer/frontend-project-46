import { parseFile } from "./parser.js";
import _ from 'lodash';

const foundDiff = (obj1, obj2) => {
    let result = "{"
    const obj1Keys = Object.keys(obj1)
    const obj2Keys = Object.keys(obj2)
  
    const ollUniqueKeys = [...new Set([...obj1Keys, ...obj2Keys])].sort();
  
    ollUniqueKeys.forEach((key) => {
      if (Object.hasOwn(obj1, key) && Object.hasOwn(obj2, key)) {
        if (_.isEqual(obj1[key], obj2[key])) {
            result = `${result}\n    ${key}: ${obj1[key]}`
        } else {
            result = `${result}\n  - ${key}: ${obj1[key]}\n  + ${key}: ${obj2[key]}`
        }
      } else {
        if (Object.hasOwn(obj1, key)) {
            result = `${result}\n  - ${key}: ${obj1[key]}`
        } else {
            result = `${result}\n  + ${key}: ${obj2[key]}`
        }
      }
    })

    result = `${result}\n}`
  
    return result;
  }

const showDiff = (firstObj, secondObj) => {
    const objectForComparison1 = parseFile(firstObj)
    const objectForComparison2 = parseFile(secondObj)

     console.log(foundDiff(objectForComparison1, objectForComparison2))
}

export { showDiff }