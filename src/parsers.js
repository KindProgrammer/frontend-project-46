import fs from 'fs';
import path from 'path';
import yaml from 'yaml';

export default (filePath) => {
  const fileExtension = filePath.split('.').pop();
  const dataForParse = fs.readFileSync(path.resolve(filePath), 'utf8');

  let parsResult;

  switch (fileExtension) {
    case 'json':
      parsResult = JSON.parse(dataForParse);
      break;
    case 'yml':
      parsResult = yaml.parse(dataForParse);
      break;
    case 'yaml':
      parsResult = yaml.parse(dataForParse);
      break;
    default:
      parsResult = JSON.parse(dataForParse);
  }

  return parsResult;
};
