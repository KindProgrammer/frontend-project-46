import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

export default (filename) => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fixturePath = path.join(__dirname, '../..', '__fixtures__', filename);
  
    return fixturePath;
  };