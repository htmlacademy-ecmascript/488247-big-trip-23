import SortingView from '../view/sorting-view.js';
import TripPointView from '../view/trip-point-view.js';
import EditingFormView from '../view/editing-form-view.js';
import EventListView from '../view/event-list-view.js';
import { render } from '../render.js';

export default class EventPresenter {
  eventList = new EventListView();

  constructor({ container, eventModel, destinationModel, offersModel }) {
    this.container = container;
    this.eventModel = eventModel;
    this.destinationModel = destinationModel;
    this.offersModel = offersModel;
  }

  init() {
    this.eventsList = [...this.eventModel.getEvents()];

    render(new SortingView(), this.container);
    render(this.eventList, this.container);
    render(new EditingFormView(), this.eventList.getElement());

    for (const event of this.eventsList) {
      const destination = this.destinationModel.getDestinationById(event.destination);
      const offers = this.offersModel.getOffersByType(event.type);
      render(new TripPointView(event, destination, offers), this.eventList.getElement());
    }
  }
}
