import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const getFixturePath = (filename) => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const fixturePath = path.join(__dirname, '../..', '__fixtures__', filename);

  return fixturePath;
};

const getDataForParse = (filePath) => fs.readFileSync(path.resolve(filePath), 'utf8');

const getPreparedData = (fileName) => {
  const preparedFilePath = getFixturePath(fileName);
  const preparedData = getDataForParse(preparedFilePath);

  return preparedData;
};

export { getPreparedData, getFixturePath };
