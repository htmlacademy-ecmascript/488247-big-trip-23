import { DESTINATIONS } from '../const';
import { nanoid } from 'nanoid';

const createDestination = (city) => ({
  id: nanoid(),
  description: `${city}, is a beautiful city, a true europe pearl, with crowded streets.`,
  name: `${city}`,
  pictures: [
    {
      src: `https://loremflickr.com/320/240/${city},landmark`,
      description: `${city}, description to the picture`,
    },
    {
      src: `https://loremflickr.com/320/240/${city}`,
      description: `${city}, description to the picture`,
    },
  ]
});

const destinations = DESTINATIONS.map((city) => createDestination(city));

export { destinations };
