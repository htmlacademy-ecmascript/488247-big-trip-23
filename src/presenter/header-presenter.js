import TripInfoView from '../view/trip-info-view.js';
import FiltersView from '../view/filters-view.js';

import { RenderPosition, render } from '../framework/render.js';

export default class HeaderPresenter {
  #eventComponent = null;
  #destinationsComponent = null;
  #infoContainer = null;
  #filterContainer = null;

  constructor({
    eventModel,
    destinationModel,
    infoContainer,
    filterContainer,
  }) {
    this.#eventComponent = eventModel;
    this.#destinationsComponent = destinationModel;
    this.#infoContainer = infoContainer;
    this.#filterContainer = filterContainer;
  }

  init() {
    if (this.#eventComponent.hasEvents()) {
      render(new TripInfoView({
        events: this.#eventComponent.events,
        destinations: this.#destinationsComponent,
      }), this.#infoContainer, RenderPosition.AFTERBEGIN);
    }
    render(new FiltersView(), this.#filterContainer);
  }
}
