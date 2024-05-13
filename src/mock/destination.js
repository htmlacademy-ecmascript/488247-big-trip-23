import { DESTINATIONS } from '../const.js';

let destinationId = 0;

const createDestination = (city) => ({
  id: `destination-id-${destinationId++}`,
  description: `${city}, is a beautiful city, a true europe pearl, with crowded streets.`,
  name: `${city}`,
  pictures: [
    {
      src: 'http://picsum.photos/300/200?r=0.0762563005163317',
      description: `${city} parliament building`,
    }
  ]
});

const createDestinations = () => DESTINATIONS.map((city) => createDestination(city));

const destinations = createDestinations();

export { destinations };
