const isEscapeKey = (evt) => evt.key === 'Escape';

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomInteger = (min, max) => {
  min = Math.ceil(Math.min(min, max));
  max = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { isEscapeKey, getRandomArrayElement, getRandomInteger };
