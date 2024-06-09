import { render } from './framework/render';
import { generateFilter } from './mock/filter';
import FilterView from './view/filter-view';
import TripPresenter from './presenter/trip-presenter';
import PointsModel from './model/points-model';

const headerMainElement = document.querySelector('.trip-main');
const filtersElement = headerMainElement.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const pointsModel = new PointsModel();
const eventPresenter = new TripPresenter({
  infoContainer: headerMainElement,
  eventContainer: tripEventsElement,
  pointsModel,
});

const filters = generateFilter(pointsModel.points);

render(new FilterView({filters}), filtersElement);

eventPresenter.init();
