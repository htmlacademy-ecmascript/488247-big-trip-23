import TripInfoView from '../view/trip-info-view.js';
import FiltersView from '../view/filters-view.js';

import { RenderPosition, render } from '../render.js';

export default class HeaderPresenter {
  constructor({infoContainer, filterContainer}) {
    this.tripInfoElement = infoContainer;
    this.filtersElement = filterContainer;
  }

  init() {
    render(new TripInfoView(), this.tripInfoElement, RenderPosition.AFTERBEGIN);
    render(new FiltersView(), this.filtersElement);
  }
}
