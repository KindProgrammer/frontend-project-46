import fs from 'fs';
import path from 'path';

const parseFile = (filePath) => {
    const fileExtension = filePath.split('.').pop()
    const dataForParse = fs.readFileSync(path.resolve(filePath), 'utf8');
    const jsonObj = JSON.parse(dataForParse)

    return jsonObj;
}

export { parseFile }