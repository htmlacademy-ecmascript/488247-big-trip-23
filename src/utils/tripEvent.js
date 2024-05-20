import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { FilterType } from '../const.js';

dayjs.extend(duration);

const getDuration = (dateFrom, dateTo) => {
  const start = dayjs(dateFrom).startOf('minute');
  const end = dayjs(dateTo).startOf('minute');
  const diffInMs = end.diff(start);

  const eventDuration = dayjs.duration(diffInMs);

  const days = Math.floor(eventDuration.asDays());
  const hours = eventDuration.hours();
  const minutes = eventDuration.minutes();

  if (days > 0) {
    return `${days.toString().padStart(2, '0')}D ${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
  }

  if (hours > 0) {
    return `${hours.toString().padStart(2, '0')}H ${minutes.toString().padStart(2, '0')}M`;
  }

  return `${minutes}M`;
};

const humanizeEventDueDate = (dueDate, format) => dueDate ? dayjs(dueDate).format(format) : '';

const isFutureEvents = ((events) => events.filter((event) => new Date(event.dateFrom) > new Date()));
const isPresentEvents = ((events) => events.filter((event) => new Date(event.dateFrom) <= new Date()
  && new Date(event.dateTo) >= new Date()));
const isPastEvents = ((events) => events.filter((event) => new Date(event.dateTo) < new Date()));

const filter = {
  [FilterType.EVERYTHING]: (events) => events,
  [FilterType.FUTURE]: (events) => isFutureEvents(events),
  [FilterType.PRESENT]: (events) => isPresentEvents(events),
  [FilterType.PAST]: (events) => isPastEvents(events),
};

export { humanizeEventDueDate, getDuration, filter };
