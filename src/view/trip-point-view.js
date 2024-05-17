import AbstractView from '../framework/view/abstract-view.js';
import { humanizeEventDueDate, getDuration } from '../utils.js';
import { DATE_FORMAT, TIME_FORMAT } from '../const.js';

const createTripEventsPointTemplate = (event, destination, offers) => {
  const { type, isFavorite, basePrice, dateFrom, dateTo } = event;

  const cityName = destination.name;

  const eventDate = humanizeEventDueDate(dateFrom, DATE_FORMAT);
  const eventStart = humanizeEventDueDate(dateFrom, TIME_FORMAT);
  const eventEnd = humanizeEventDueDate(dateTo, TIME_FORMAT);
  const eventDuration = getDuration(dateFrom, dateTo);

  const favoriteClassName = isFavorite
    ? ' event__favorite-btn--active'
    : '';

  const getOffers = () => {
    if (!offers || offers.length === 0) {
      return '';
    }

    const offersList = [...offers].map((offer) => `
      <li class="event__offer">
        <span class="event__offer-title">${offer.title}</span>
        <span class="event__offer-price">
          &plus;&euro;${offer.price}
        </span>
      </li>`).join('');

    return `<ul class="event__selected-offers">${offersList}</ul>`;
  };

  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="2019-03-18">${eventDate}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${cityName}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-18T10:30">${eventStart}</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-18T11:00">${eventEnd}</time>
        </p>
        <p class="event__duration">${eventDuration}</p>
      </div>
      <p class="event__price">
        &euro;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      ${getOffers()}
      <button class="event__favorite-btn${favoriteClassName}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};

export default class TripPointView extends AbstractView {
  #event = null;
  #destination = null;
  #offers = null;
  #handleEditClick = null;

  constructor({event, destination, offers, onEditClick}) {
    super();
    this.#event = event;
    this.#destination = destination;
    this.#offers = offers;
    this.#handleEditClick = onEditClick;

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#editClickHandler);
  }

  get template() {
    return createTripEventsPointTemplate(this.#event, this.#destination, this.#offers);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this.#handleEditClick();
  };
}
