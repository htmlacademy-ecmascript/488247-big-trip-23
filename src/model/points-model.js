import { createPoint } from '../mock/trip-point-mock';
import { destinations } from '../mock/destinations-mock';
import { offersType } from '../mock/offers-mock';

const POINT_COUNT = 7;

export default class PointsModel {
  #points = Array.from({length: POINT_COUNT}, createPoint);

  constructor() {
    this.destinations = [...destinations];
    this.offersType = [...offersType];
  }

  get points() {
    return this.#points;
  }

  hasPoints() {
    return this.#points.length > 0;
  }

  getDestinationById(id) {
    return this.destinations.find((destination) => id === destination.id);
  }

  getOffersByType(type) {
    return this.offersType.find((offers) => offers.type === type).offers;
  }
}
