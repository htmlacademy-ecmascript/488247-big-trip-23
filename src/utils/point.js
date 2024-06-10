import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { DateFormats, FilterType } from '../const';

dayjs.extend(duration);

const getDuration = (dateFrom, dateTo) => {
  const dateDelta = dayjs.duration(dayjs(dateTo).diff(dateFrom));
  if (dateDelta.days()) {
    return dateDelta.format(DateFormats.DAY);
  }

  if (dateDelta.hours()) {
    return dateDelta.format(DateFormats.HOURS);
  }

  return dateDelta.format(DateFormats.MINUTES);
};


const displayDateMonth = (date) => date ? dayjs(date).format(DateFormats.DATE_MONTH) : '';
const displayDate = (date) => date ? dayjs(date).format(DateFormats.DATE) : '';
const displayTime = (time) => time ? dayjs(time).format(DateFormats.TIME) : '';
const displayDateTime = (date, dateFormat = DateFormats.DATE_TIME_SYSTEM) => date ? dayjs(date).format(dateFormat) : '';

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

export {
  getDuration,
  displayDateMonth,
  displayDate,
  displayTime,
  displayDateTime,
  filter,
};
