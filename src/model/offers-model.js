import { offers } from '../mock/offers.js';


export default class OffersModel {
  constructor() {
    this.offers = offers;
  }

  getOffers() {
    return this.offers;
  }

  getOffersByType(type) {
    return this.offers.find((offersType) => offersType.type === type);
  }
}
