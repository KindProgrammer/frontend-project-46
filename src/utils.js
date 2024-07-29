import fs from 'fs';

const readFile = (pathToFile) => {
    const text = fs.readFileSync(pathToFile, 'utf-8');
    return text
}

export { readFile }
