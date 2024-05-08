import { getRandomArrayElement, getRandomInteger } from '../utils.js';
import { destinations } from './destination.js';
import { offers } from './offers.js';
import { EVENT_TYPES, BasePrice } from '../const.js';

let eventId = 0;
let monthNumber = 4;
let dayNumber = 5;

const getRandomBoolean = () => getRandomArrayElement([true, false]);

const getRandomDestination = () => getRandomArrayElement(destinations);

const createEvent = () => {
  const type = getRandomArrayElement(EVENT_TYPES);
  const offersType = offers.find((item) => item.type === type).offers;
  return {
    id: `point-id-${eventId++}`,
    basePrice: getRandomInteger(BasePrice.MIN, BasePrice.MAX),
    dateFrom: `2019-0${monthNumber}-0${dayNumber}T12:50:56.845Z`,
    dateTo: `2019-0${monthNumber++}-0${dayNumber--}T13:20:13.375Z`,
    destination: getRandomDestination().id,
    isFavorite: getRandomBoolean(),
    offers: offersType.map((item) => item.id),
    type,
  };
};

export { createEvent };
