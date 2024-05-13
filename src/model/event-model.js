import { createEvent } from '../mock/event.js';
import { TRIP_POINTS_COUNT } from '../const.js';

export default class EventModel {
  events = Array.from({length: TRIP_POINTS_COUNT}, createEvent);

  getEvents() {
    return this.events;
  }
}
