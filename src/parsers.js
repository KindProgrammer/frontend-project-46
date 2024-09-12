import yaml from 'yaml';

export default (dataForParse, fileExtension) => {
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
