import { createElement } from '../render.js';
import { FILTER_TYPES } from '../const.js';

const createFiltersItemTemplate = (item) => `
  <div class="trip-filters__filter">
    <input id="filter-${item}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${item}" checked>
    <label class="trip-filters__filter-label" for="filter-${item}">${item}</label>
  </div>
`;

const createFiltersTemplate = () => `
<form class="trip-filters" action="#" method="get">
  ${FILTER_TYPES.map((filter) => createFiltersItemTemplate(filter)).join('')}

  <button class="visually-hidden" type="submit">Accept filter</button>
</form>`;

export default class FiltersView {
  getTemplate() {
    return createFiltersTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
