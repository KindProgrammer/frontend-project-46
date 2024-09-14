import getStylish from './stylish.js';
import getPlain from './plain.js';
import getJson from './json.js';

export default (data, format) => {
  let ansver;
  switch (format) {
    case 'plain':
      ansver = getPlain(data);
      break;

    case 'json':
      ansver = getJson(data);
      break;

    default:
      ansver = getStylish(data);
      break;
  }
  return ansver;
};
