import HeaderPresenter from './presenter/info-presenter.js';
import EventPresenter from './presenter/events-presenter.js';
import EventModel from './model/event-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';
import FiltersView from './view/filters-view.js';
import { render } from './framework/render.js';
import { generateFilter } from './mock/filter.js';
import EmptyEventsListView from './view/empty-events-list-view.js';

const infoContainer = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');
const eventModel = new EventModel();
const destinationModel = new DestinationsModel();
const offersModel = new OffersModel('drive');

const headerPresenter = new HeaderPresenter({
  eventModel,
  destinationModel,
  infoContainer,
  filterContainer,
});
const eventPresenter = new EventPresenter({
  container: eventsContainer,
  eventModel,
  destinationModel,
  offersModel,
});

const filters = generateFilter(eventModel.events);

if (!eventModel.hasEvents()) {
  render(new EmptyEventsListView({filters}), eventsContainer);
}
render(new FiltersView({filters}), filterContainer);

headerPresenter.init();
eventPresenter.init();
