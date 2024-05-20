import SortingView from '../view/sorting-view.js';
import TripPointView from '../view/trip-point-view.js';
import EventListView from '../view/event-list-view.js';
import EditingFormView from '../view/editing-form-view.js';
import { render, replace } from '../framework/render.js';
import { isEscapeKey } from '../utils/common.js';

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

    this.#renderEventsList();
  }

  #renderEvent(event) {
    const destination = this.#destinationModel.getDestinationById(event.destination);
    const offers = this.#offersModel.getOffersByType(event.type).offers;

    const escKeyDownHandler = (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        replaceFormToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    };

    const eventComponent = new TripPointView({
      event,
      destination,
      offers,
      onEditClick: () => {
        replaceEventToForm();
        document.addEventListener('keydown', escKeyDownHandler);
      },
    });

    const eventEditComponent = new EditingFormView({
      event,
      destination,
      offers,
      onFormClose: () => {
        replaceFormToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
      onFormSubmit: () => {
        replaceFormToEvent();
        document.removeEventListener('keydown', escKeyDownHandler);
      },
    });

    function replaceEventToForm() {
      replace(eventEditComponent, eventComponent);
    }

    function replaceFormToEvent() {
      replace(eventComponent, eventEditComponent);
    }

    render(eventComponent, this.#eventList.element);
  }

  #renderEventsList() {
    if (this.#eventsList.length > 1) {
      render(new SortingView(), this.#container);
    }

    render(this.#eventList, this.#container);

    this.#eventsList.forEach((event) => this.#renderEvent(event));
  }
}
