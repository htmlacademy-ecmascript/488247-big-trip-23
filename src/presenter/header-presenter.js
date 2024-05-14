import TripInfoView from '../view/trip-info-view.js';
import FiltersView from '../view/filters-view.js';

import { RenderPosition, render } from '../framework/render.js';

export default class HeaderPresenter {
  #infoContainer = null;
  #filterContainer = null;

  constructor({infoContainer, filterContainer}) {
    this.#infoContainer = infoContainer;
    this.#filterContainer = filterContainer;
  }

  init() {
    render(new TripInfoView(), this.#infoContainer, RenderPosition.AFTERBEGIN);
    render(new FiltersView(), this.#filterContainer);
  }
}
