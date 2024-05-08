const TRIP_POINTS_COUNT = 3;

const DATE_FORMAT = 'MMM D';
const TIME_FORMAT = 'HH:mm';

const SORT_TYPES = ['day', 'event', 'time', 'price', 'offers'];

const FILTER_TYPES = ['everything', 'future', 'present', 'past'];

const DESTINATIONS = ['Amsterdam', 'Geneva', 'Chamonix', 'Belgrad', 'Moscow'];

const EVENT_TYPES = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

const OfferPrice = {
  MIN: 5,
  MAX: 75,
};

const OffersCount = {
  MIN: 0,
  MAX: 6,
};

const BasePrice = {
  MIN: 20,
  MAX: 200,
};

export {
  TRIP_POINTS_COUNT,
  DATE_FORMAT,
  TIME_FORMAT,
  SORT_TYPES,
  EVENT_TYPES,
  FILTER_TYPES,
  DESTINATIONS,
  OfferPrice,
  OffersCount,
  BasePrice,
};