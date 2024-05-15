import SortingView from '../view/sorting-view.js';
import TripPointView from '../view/trip-point-view.js';
import EventListView from '../view/event-list-view.js';
import EditingFormView from '../view/editing-form-view.js';
import { render } from '../framework/render.js';

export default class EventPresenter {
  #eventList = new EventListView();
  #container = null;

  #eventModel = null;
  #destinationModel = null;
  #offersModel = null;

  #eventsList = null;

  constructor({container, eventModel, destinationModel, offersModel}) {
    this.#container = container;
    this.#eventModel = eventModel;
    this.#destinationModel = destinationModel;
    this.#offersModel = offersModel;
  }

  init() {
    this.#eventsList = [...this.#eventModel.events];

    if (this.#eventsList.length > 1) {
      render(new SortingView(), this.#container);
    }

    render(this.#eventList, this.#container);
    render(new EditingFormView({event: this.#eventsList[0],
      destination: this.#destinationModel,
      offers: this.#offersModel,
    }), this.#eventList.element);

    this.#eventsList.forEach((event) => this.#renderEvent(event));
  }

  #renderEvent(event) {
    const destination = this.#destinationModel.getDestinationById(event.destination);
    const offers = this.#offersModel.getOffersByType(event.type).offers;
    const eventComponent = new TripPointView({ event, destination, offers });

    render(eventComponent, this.#eventList.element);
  }
}
