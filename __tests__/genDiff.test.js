import { foundDiff } from '../src/genDiff.js';

test('foundDiff', () => {
  expect(foundDiff({}, {})).toEqual('{}');
});
