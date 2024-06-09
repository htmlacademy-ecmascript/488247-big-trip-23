function isEscapeKey(evt) {
  return evt.key === 'Escape';
}

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomInteger(min, max) {
  min = Math.ceil(Math.min(min, max));
  max = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { getRandomArrayElement, getRandomInteger, isEscapeKey };
