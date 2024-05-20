import { createEvent } from '../mock/event.js';
import { TRIP_POINTS_COUNT } from '../const.js';

export default class EventModel {
  #events = Array.from({length: TRIP_POINTS_COUNT}, createEvent);

  get events() {
    return this.#events;
  }

  hasEvents() {
    return this.#events.length > 0;
  }
}
