import { filter } from '../utils/tripEvent.js';

const generateFilter = (events) =>
  Object.entries(filter).map(
    ([filterType, filterEvents]) => ({
      type: filterType,
      hasEvents: filterEvents(events).length > 0,
    })
  );

export { generateFilter };
