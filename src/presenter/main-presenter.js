import TripInfoView from '../view/trip-info-view.js';
import FiltersView from '../view/filters-view.js';
import SortingView from '../view/sorting-view.js';
import TripPointView from '../view/trip-point-view.js';
import EditingFormView from '../view/editing-form-view.js';
import { RenderPosition, render } from '../render.js';

export default class MainPresenter {
  constructor() {
    this.tripInfoElement = document.querySelector('.trip-main');
    this.filtersElement = document.querySelector('.trip-controls__filters');
    this.tripEventsElement = document.querySelector('.trip-events');

    this.eventsListElement = document.createElement('ul');
    this.eventsListElement.classList.add('trip-events__list');
    this.tripEventsElement.append(this.eventsListElement);
  }

  init() {
    render(new TripInfoView(), this.tripInfoElement, RenderPosition.AFTERBEGIN);
    render(new FiltersView(), this.filtersElement);
    render(new SortingView(), this.tripEventsElement, RenderPosition.AFTERBEGIN);
    render(new EditingFormView(), this.eventsListElement);

    for (let i = 0; i < 3; i++) {
      render(new TripPointView(), this.eventsListElement);
    }
  }
}
