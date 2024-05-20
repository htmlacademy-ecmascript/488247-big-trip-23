import AbstractView from '../framework/view/abstract-view.js';
import { EmptyResultMessages } from '../const.js';

const createEmptyEventsListTemplate = (filters) => filters
  .map((filter, index) => !filter.hasEvents && index === 0
    ? `<p class="trip-events__msg">${EmptyResultMessages[filter.type]}</p>`
    : '');


export default class EmptyEventsListView extends AbstractView {
  #filters = null;

  constructor({ filters }) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createEmptyEventsListTemplate(this.#filters);
  }
}
