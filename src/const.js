const DEFAULT_POINT_TYPE = 'taxi';

const POINT_TYPES = [
  'taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'
];

const DESTINATIONS = [
  'Amsterdam', 'Geneva', 'Chamonix', 'Belgrad', 'Moscow'
];

const FILTER_TYPES = ['everything', 'future', 'present', 'past'];

const SORT_TYPES = ['day', 'event', 'time', 'price', 'offers'];

const DateFormats = {
  DATE_MONTH: 'MMM D',
  DATE: 'YYYY-MM-DD',
  TIME: 'HH:mm',
  DATE_TIME_SYSTEM: 'YYYY-MM-DDTHH:mm',
  DATE_TIME: 'YY/MM/DD HH:mm',
  DAY: 'DD[d] HH[h] mm[m]',
  HOURS: 'HH[h] mm[m]',
  MINUTES: 'mm[m]'
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const BLANC_EVENT_POINT = {
  type: DEFAULT_POINT_TYPE,
  dateFrom: new Date().toISOString(),
  dateTo: null,
  destination: null,
  price: 0,
  offers: [],
  isFavorite: false,
};

export {
  POINT_TYPES,
  DESTINATIONS,
  FILTER_TYPES,
  SORT_TYPES,
  BLANC_EVENT_POINT,
  DateFormats,
  FilterType,
};
