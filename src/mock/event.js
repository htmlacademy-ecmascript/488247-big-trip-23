import { getRandomArrayElement, getRandomInteger } from '../utils.js';
import { destinations } from './destination.js';
import { offers } from './offers.js';
import { EVENT_TYPES, BasePrice } from '../const.js';
import dayjs from 'dayjs';

let eventId = 0;
const dateFrom = dayjs().subtract(2, 'h').subtract(1, 'd').toISOString();
const dateTo = dayjs().add(1, 'h').add(15, 'minute').toISOString();

const getRandomBoolean = () => getRandomArrayElement([true, false]);

const getRandomDestination = () => getRandomArrayElement(destinations);

const createEvent = () => {
  const type = getRandomArrayElement(EVENT_TYPES);
  const offersType = offers.find((item) => item.type === type).offers;
  return {
    id: `point-id-${eventId++}`,
    basePrice: getRandomInteger(BasePrice.MIN, BasePrice.MAX),
    dateFrom,
    dateTo,
    destination: getRandomDestination().id,
    isFavorite: getRandomBoolean(),
    offers: offersType.map((item) => item.id),
    type,
  };
};

export { createEvent };
