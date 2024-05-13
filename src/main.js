import HeaderPresenter from './presenter/header-presenter.js';
import EventPresenter from './presenter/events-presenter.js';
import EventModel from './model/event-model.js';
import DestinationsModel from './model/destinations-model.js';
import OffersModel from './model/offers-model.js';

const infoContainer = document.querySelector('.trip-main');
const filterContainer = document.querySelector('.trip-controls__filters');
const eventsContainer = document.querySelector('.trip-events');
const eventModel = new EventModel();
const destinationModel = new DestinationsModel();
const offersModel = new OffersModel('drive');

const headerPresenter = new HeaderPresenter({infoContainer, filterContainer});
const eventPresenter = new EventPresenter({
  container: eventsContainer,
  eventModel,
  destinationModel,
  offersModel,
});

headerPresenter.init();
eventPresenter.init();
