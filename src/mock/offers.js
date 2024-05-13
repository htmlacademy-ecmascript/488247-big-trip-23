import { getRandomInteger } from '../utils.js';
import { EVENT_TYPES, OfferPrice, OffersCount } from '../const.js';

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

const offers = EVENT_TYPES.map((event) => createOffersType(event));

export { offers };
