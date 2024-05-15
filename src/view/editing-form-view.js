import AbstractView from '../framework/view/abstract-view.js';
import { humanizeEventDueDate } from '../utils.js';
import { EVENT_TYPES, DATE_TIME_FORMAT } from '../const.js';

const createEditFormTemplate = (event, destination, offers) => {
  const { type, basePrice, dateFrom, dateTo } = event;

  const eventDestination = destination.getDestinationById(event.destination); // временное решение
  const eventStart = humanizeEventDueDate(dateFrom, DATE_TIME_FORMAT);
  const eventEnd = humanizeEventDueDate(dateTo, DATE_TIME_FORMAT);
  const eventOffers = offers.getOffersByType(event.type).offers;

  const cityName = eventDestination.name; // временное решение
  const destinationDescription = eventDestination.description;

  const getOffers = () => {
    if (!eventOffers || eventOffers.length === 0) {
      return '';
    }

    const offersList = [...eventOffers].map((offer) => `
      <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="${offer.id}" type="checkbox" name="${offer.title}" checked>
          <label class="event__offer-label" for="${offer.id}">
            <span class="event__offer-title">${offer.title}</span>
            &plus;&euro;<span class="event__offer-price">${offer.price}</span>
          </label>
      </div>`
    ).join('');

    return `
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
          ${offersList}
        </div>
      </section>`;
  };

  const isChecked = (item) => item === type ? ' checked' : '';

  const selectEvent = () => EVENT_TYPES.map((item) => `
      <div class="event__type-item">
        <input id="event-type-${item}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${item}"${isChecked(item)}>
        <label class="event__type-label  event__type-label--${item}" for="event-type-${item}-1">${item}</label>
      </div>`).join('');

  return `<li class="trip-events__item">
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
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${cityName}" list="destination-list-1">
          <datalist id="destination-list-1">
            <option value="Amsterdam"></option>
            <option value="Geneva"></option>
            <option value="Chamonix"></option>
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${eventStart}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${eventEnd}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="&euro;${basePrice}">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
      <section class="event__details">
        ${getOffers()}
        <section class="event__section  event__section--destination">
          <h3 class="event__section-title  event__section-title--destination">Destination</h3>
          <p class="event__destination-description">${destinationDescription}</p>
        </section>
      </section>
    </form>
  </li>`;
};

export default class EditingFormView extends AbstractView {
  #event = null;
  #destination = null;
  #offers = null;

  constructor({event, destination, offers}) {
    super();
    this.#event = event;
    this.#destination = destination;
    this.#offers = offers;
  }

  get template() {
    return createEditFormTemplate(this.#event, this.#destination, this.#offers);
  }
}
