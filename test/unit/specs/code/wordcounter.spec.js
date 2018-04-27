'use strict';

import index from '@/code/wordcounter';

describe('index', () => {
  it('should return 10 items', () => {
    let input = 'one two three four five six seven eight nine ten eleven';
    expect(index(input).length).toEqual(10);
  });

  it('should return items in descending order', () => {
    let input = 'the the my you';
    expect(index(input)).toEqual([{ key: 'THE', value: 2 }, { key: 'MY', value: 1 }, { key: 'YOU', value: 1 }]);
  });

  it('should return items in alphabetical order if there is a tie', () => {
    let input = 'the my you them';
    expect(index(input)).toEqual([{ key: 'MY', value: 1 }, { key: 'THE', value: 1 }, { key: 'THEM', value: 1 }, { key: 'YOU', value: 1 }]);
  });

  it('should remove punctuation from input', () => {
    let input = 'you, my. my; :?\'-()&$!';
    expect(index(input)).toEqual([{ key: 'MY', value: 2 }, { key: 'YOU', value: 1 }]);
  });
});