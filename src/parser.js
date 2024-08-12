import fs from 'fs';
import path from 'path';

export default (filePath) => {
  // const fileExtension = filePath.split('.').pop();
  const dataForParse = fs.readFileSync(path.resolve(filePath), 'utf8');
  const jsonObj = JSON.parse(dataForParse);

  return jsonObj;
};
