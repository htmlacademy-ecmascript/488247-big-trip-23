import TripInfoView from '../view/trip-info-view.js';

import { RenderPosition, render } from '../framework/render.js';

export default class HeaderPresenter {
  #eventComponent = null;
  #destinationsComponent = null;
  #infoContainer = null;

  constructor({
    eventModel,
    destinationModel,
    infoContainer,
  }) {
    this.#eventComponent = eventModel;
    this.#destinationsComponent = destinationModel;
    this.#infoContainer = infoContainer;
  }

  init() {
    if (this.#eventComponent.hasEvents()) {
      render(new TripInfoView({
        events: this.#eventComponent.events,
        destinations: this.#destinationsComponent,
      }), this.#infoContainer, RenderPosition.AFTERBEGIN);
    }
  }
}
