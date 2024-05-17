import AbstractView from '../framework/view/abstract-view.js';
import { SORT_TYPES } from '../const.js';

const createSortingItemTemplate = (type) => `
  <div class="trip-sort__item  trip-sort__item--${type}">
    <input id="sort-${type}" class="trip-sort__input  visually-hidden" type="radio"
      name="trip-sort" value="sort-${type}"${type}"${type === SORT_TYPES[0] ? ' checked' : ''}>
    <label class="trip-sort__btn" for="sort-${type}">${type}</label>
  </div>`;

const createSortingTemplate = () => `
  <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    ${SORT_TYPES.map((type) => createSortingItemTemplate(type)).join('')}
  </form>`;

export default class SortingView extends AbstractView {
  get template() {
    return createSortingTemplate();
  }
}
