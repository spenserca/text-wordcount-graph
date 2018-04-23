'use strict';

module.exports = (input) => {
  return input.replace(/[^a-zA-Z\s]/g, ' ')
    .split(/\s/)
    .filter(s => s != '')
    .map(s => s.toUpperCase())
    .reduce(updateExistingOrAddNewValue, [])
    .sort(byValueDescAlphaAsc)
    .slice(0, 10);
}

const updateExistingOrAddNewValue = (acc, value) => {
  let existingWord = acc.find(el => el.key == value);
  if (!existingWord) {
    acc.push({ key: value, value: 1 });
  }
  else {
    acc[acc.indexOf(existingWord)].value++;
  }
  return acc;
}

const byValueDescAlphaAsc = (a, b) => {
  if (a.value === b.value) {
    return sortAlphabeticallyAsc(a, b);
  }

  // Sort descending by value
  return b.value - a.value;
};

const sortAlphabeticallyAsc = (a, b) => {
  return a.key < b.key ? -1 : a.key > b.key ? 1 : 0;
};