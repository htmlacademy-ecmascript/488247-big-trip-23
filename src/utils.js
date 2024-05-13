import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { DATE_FORMAT, TIME_FORMAT } from './const';
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

const getRandomArrayElement = (items) => items[Math.floor(Math.random() * items.length)];

const getRandomInteger = (min, max) => {
  min = Math.ceil(Math.min(min, max));
  max = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const humanizeEventDueDate = (dueDate) => dueDate ? dayjs(dueDate).format(DATE_FORMAT) : '';
const humanizeEventDueTime = (dueDate) => dueDate ? dayjs(dueDate).format(TIME_FORMAT) : '';

export { getRandomArrayElement, getRandomInteger, humanizeEventDueDate, humanizeEventDueTime, getDuration };
