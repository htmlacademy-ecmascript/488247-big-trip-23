import { getRandomArrayElement, getRandomInteger } from '../utils/common';
import { destinations } from './destinations-mock';
import { offersType } from './offers-mock';
import { POINT_TYPES } from '../const';
import dayjs from 'dayjs';

const BasePrice = {
  MIN: 20,
  MAX: 200,
};

let pointId = 0;

const getRandomBoolean = () => Math.random() < 0.5;

const getRandomDestination = () => getRandomArrayElement(destinations);

const createPoint = () => {
  const type = getRandomArrayElement(POINT_TYPES);
  const offers = offersType.find((item) => item.type === type).offers;
  const dateFrom = dayjs().hour(12).minute(30).subtract(getRandomInteger(0, 5), 'd').toISOString();
  const dateTo = dayjs(dateFrom).add(getRandomInteger(0, 5), 'd').add(30, 'm').toISOString();

  return {
    id: `point-id-${pointId++}`,
    type,
    dateFrom,
    dateTo,
    basePrice: getRandomInteger(BasePrice.MIN, BasePrice.MAX),
    offers: offers.map((item) => item.id),
    destination: getRandomDestination().id,
    isFavorite: getRandomBoolean(),
  };
};

export { createPoint };
