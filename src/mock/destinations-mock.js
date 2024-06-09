import { DESTINATIONS } from '../const';

let destinationId = 0;

const createDestination = (city) => ({
  id: `destination-id-${destinationId++}`,
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
