import { offers } from '../mock/offers.js';

export default class OffersModel {
  #offers = offers;

  get offers() {
    return this.#offers;
  }

  getOffersByType(type) {
    return this.#offers.find((offersType) => offersType.type === type);
  }
}
