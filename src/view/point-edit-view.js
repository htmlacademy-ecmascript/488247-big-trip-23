import AbstractView from '../framework/view/abstract-view';
import { BLANC_EVENT_POINT, DESTINATIONS, POINT_TYPES, DateFormats } from '../const';
import { displayDateTime } from '../utils/point';

export default class PointEditView extends AbstractView {
  #point = null;
  #destination = null;
  #offers = null;
  #handleFormClose = null;
  #handleFormSubmit = null;

  constructor({
    point = BLANC_EVENT_POINT,
    destination,
    offers,
    onFormClose,
    onFormSubmit,
  }) {
    super();
    this.#point = point;
    this.#destination = destination;
    this.#offers = offers;
    this.#handleFormClose = onFormClose;
    this.#handleFormSubmit = onFormSubmit;

    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#formCloseHandler);
    this.element.querySelector('form.event--edit')
      .addEventListener('submit', this.#formSubmitHandler);
  }

  get template() {
    return createPointEditTemplate(
      this.#point,
      this.#destination,
      this.#offers,
    );
  }

  #formCloseHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormClose();
  };

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this.#handleFormSubmit(this.#point);
  };
}

function createOffersList(offers) {
  return [...offers].map((offer) => `
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="${offer.id}" type="checkbox" name="${offer.title}" checked>
        <label class="event__offer-label" for="${offer.id}">
          <span class="event__offer-title">${offer.title}</span>
          &plus;&euro;<span class="event__offer-price">${offer.price}</span>
        </label>
    </div>`
  ).join('');
}

function renderOffers(offers) {
  if (!offers || offers.length === 0) {
    return '';
  }

  return (
    `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${createOffersList(offers)}
      </div>
    </section>`
  );
}

function renderPictures(destination) {
  if (destination.pictures.length === 0) {
    return '';
  }

  return (
    `<div class="event__photos-container">
      <div class="event__photos-tape">
        ${destination.pictures.map((picture) => `
        <img class="event__photo" src="${picture.src}"
        alt="${picture.description}">`)}
      </div>
    </div>`
  );
}

function createPointEditTemplate(point, destination, offers) {
  const { type, basePrice, dateFrom, dateTo } = point;

  const isChecked = (item) => item === type ? ' checked' : '';

  const selectEvent = () => POINT_TYPES.map((item) => `
    <div class="event__type-item">
      <input id="event-type-${item}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item}"${isChecked(item)}>
      <label class="event__type-label  event__type-label--${item}" for="event-type-${item}-1">${item}</label>
    </div>`).join('');

  return (
    `<li class="trip-events__item">
      <form class="event event--edit" action="#" method="post">
        <header class="event__header">
          <div class="event__type-wrapper">
            <label class="event__type  event__type-btn" for="event-type-toggle-1">
              <span class="visually-hidden">Choose event type</span>
              <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
            </label>
            <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

            <div class="event__type-list">
              <fieldset class="event__type-group">
                <legend class="visually-hidden">Event type</legend>
                ${selectEvent()}
              </fieldset>
            </div>
          </div>

          <div class="event__field-group  event__field-group--destination">
            <label class="event__label  event__type-output" for="event-destination-1">
              ${type}
            </label>
            <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination"
              value="${destination.name}" list="destination-list-1">
            <datalist id="destination-list-1">
              ${DESTINATIONS.map((item) => `<option value="${item}"></option>`)}
            </datalist>
          </div>

          <div class="event__field-group  event__field-group--time">
            <label class="visually-hidden" for="event-start-time-1">From</label>
            <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time"
            value="${displayDateTime(dateFrom, DateFormats.DATE_TIME)}">
            &mdash;
            <label class="visually-hidden" for="event-end-time-1">To</label>
            <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time"
            value="${displayDateTime(dateTo, DateFormats.DATE_TIME)}">
          </div>

          <div class="event__field-group  event__field-group--price">
            <label class="event__label" for="event-price-1">
              <span class="visually-hidden">Price</span>
              &euro;
            </label>
            <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
          </div>

          <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
          <button class="event__reset-btn" type="reset">Delete</button>
          <button class="event__rollup-btn" type="button">
            <span class="visually-hidden">Open event</span>
          </button>
        </header>
        <section class="event__details">
          ${renderOffers(offers)}

          <section class="event__section  event__section--destination">
            <h3 class="event__section-title  event__section-title--destination">Destination</h3>
            <p class="event__destination-description">${destination.description}</p>
            ${renderPictures(destination)}
          </section>
        </section>
      </form>
    </li>`
  );
}
