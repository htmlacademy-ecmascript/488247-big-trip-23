import { getRandomInteger } from '../utils/common';
import { POINT_TYPES } from '../const';

const OfferPrice = {
  MIN: 5,
  MAX: 75,
};

const OffersCount = {
  MIN: 0,
  MAX: 4,
};

let offerId = 0;

const createOffer = (type) => ({
  id: `${type}-offer-id-${offerId++}`,
  title: `${type}-offer#${offerId}`,
  price: getRandomInteger(OfferPrice.MIN, OfferPrice.MAX),
});

const createOffersType = (type) => {
  offerId = 0;
  return {
    type,
    offers: Array.from(
      { length: getRandomInteger(OffersCount.MIN, OffersCount.MAX) },
      () => createOffer(type),
    )
  };
};

const offersType = POINT_TYPES.map((event) => createOffersType(event));

export { offersType };
