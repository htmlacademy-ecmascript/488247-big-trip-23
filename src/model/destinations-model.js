import { destinations } from '../mock/destination.js';

export default class DestinationsModel {
  constructor() {
    this.destinations = destinations;
  }

  getDestinations() {
    return this.destinations;
  }

  getDestinationById(id) {
    return this.destinations.find((destination) => destination.id === id);
  }
}
