import AbstractView from '../framework/view/abstract-view';
import { humanizeEventDueDate } from '../utils/tripEvent';

const DAY_FORMAT = 'D';
const MONTH_FORMAT = 'MMM';
const DATE_FORMAT = 'D MMM';
const DISPLAYED_POINTS_INFO = 3;

export default class TripInfoView extends AbstractView {
  #events = null;
  #destinations = null;

  constructor({events, destinations}) {
    super();
    this.#events = events;
    this.#destinations = destinations;
  }

  get template() {
    return createTripInfoTemplate(this.#events, this.#destinations);
  }
}

function createTripInfoTemplate(events, destinations) {
  const startDate = events[0].dateFrom;
  const endDate = events[events.length - 1].dateTo;

  function getRoute() {
    const firstPoint = destinations.getDestinationById(events[0].destination).name;
    const lastPoint = destinations.getDestinationById(events[events.length - 1].destination).name;
    if (events.length > 2) {
      const middlePoint = events.length <= DISPLAYED_POINTS_INFO
        ? destinations.getDestinationById(events[1].destination).name
        : '. . .';
      return `${firstPoint} &mdash; ${middlePoint} &mdash; ${lastPoint}`;
    } else if (events.length === 2) {
      return `${firstPoint} &mdash; ${lastPoint}`;
    }
    return `${firstPoint}`;
  }

  function getTripTime(start, end) {
    const startDay = humanizeEventDueDate(start, DAY_FORMAT);
    const startMonth = humanizeEventDueDate(start, MONTH_FORMAT)
      === humanizeEventDueDate(end, MONTH_FORMAT)
      ? ''
      : humanizeEventDueDate(start, MONTH_FORMAT);
    const endTime = humanizeEventDueDate(endDate, DATE_FORMAT);
    return `${startDay}${startMonth}&nbsp;&mdash;&nbsp;${endTime}`;
  }

  return (
    `<section class="trip-main__trip-info  trip-info">
      <div class="trip-info__main">
        <h1 class="trip-info__title">${getRoute()}</h1>

        <p class="trip-info__dates">${getTripTime(startDate, endDate)}</p>
      </div>

      <p class="trip-info__cost">
        Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>
      </p>
    </section>`
  );
}
