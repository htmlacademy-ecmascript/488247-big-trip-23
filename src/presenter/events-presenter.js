import SortingView from '../view/sorting-view.js';
import TripPointView from '../view/trip-point-view.js';
import EventListView from '../view/event-list-view.js';
import { render } from '../framework/render.js';

export default class EventPresenter {
  #eventList = new EventListView();
  #container = null;

  #eventModel = null;
  #destinationModel = null;
  #offersModel = null;

  #eventsList = null;

  constructor({ container, eventModel, destinationModel, offersModel }) {
    this.#container = container;
    this.#eventModel = eventModel;
    this.#destinationModel = destinationModel;
    this.#offersModel = offersModel;
  }

  init() {
    this.#eventsList = [...this.#eventModel.events];

    render(new SortingView(), this.#container);
    render(this.#eventList, this.#container);

    for (const event of this.#eventsList) {
      const destination = this.#destinationModel.getDestinationById(event.destination);
      const offers = this.#offersModel.getOffersByType(event.type);
      render(new TripPointView(event, destination, offers), this.#eventList.element);
    }
  }
}
