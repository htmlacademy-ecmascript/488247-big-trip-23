import { render } from './framework/render';
import { generateFilter } from './mock/filter';
import FilterView from './view/filter-view';
import EventPresenter from './presenter/event-presenter';
import PointsModel from './model/points-model';

const headerMainElement = document.querySelector('.trip-main');
const filtersElement = headerMainElement.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const eventPresenter = new EventPresenter({
  infoContainer: headerMainElement,
  eventContainer: tripEventsElement,
  pointsModel,
});

const filters = generateFilter(pointsModel.points);

render(new FilterView({filters}), filtersElement);

eventPresenter.init();
