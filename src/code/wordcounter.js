'use strict';

export default (input, wordsToDisplay = 10) =>
  input.replace(/[^a-zA-Z\s]/g, ' ')
    .split(/\s/)
    .filter(s => s !== '')
    .map(s => s.toUpperCase())
    .reduce(updateExistingOrAddNewValue, [])
    .sort(byValueDescAlphaAsc)
    .slice(0, wordsToDisplay);

const updateExistingOrAddNewValue = (acc, value) => {
  let existingWord = acc.find(el => el.key === value);

  existingWord ? acc[acc.indexOf(existingWord)].value++
    : acc.push({ key: value, value: 1 });

  return acc;
};

const byValueDescAlphaAsc = (a, b) => {
  return a.value === b.value ? sortAlphabeticallyAsc(a, b)
    : b.value - a.value;
};

const sortAlphabeticallyAsc = (a, b) => {
  return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
};