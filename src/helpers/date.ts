import dayjs from 'dayjs';
import customParseFormatPlugin from 'dayjs/plugin/customParseFormat';
import relativeTimePlugin from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt';
import 'dayjs/locale/en';

import { getCurrentLocale } from '@/locales/server';

dayjs.extend(relativeTimePlugin);
dayjs.extend(customParseFormatPlugin);

function dateFromString(date: string | Date) {
  if (typeof date !== 'string') {
    return date;
  }
  return dayjs(date, 'YYYY-MM-DD').toDate();
}

export function toFormattedMonthAndYear(date: string) {
  const dateObj = dateFromString(date);
  const currentLang = getCurrentLocale();

  return dayjs(dateObj).locale(currentLang).format('MMMM YYYY');
}

export function timeDifference(date1: string | Date, date2: string | Date) {
  const date1Obj = dayjs(dateFromString(date1)).subtract(1, 'month').toDate();
  const date2Obj = dateFromString(date2);
  const currentLang = getCurrentLocale();

  return dayjs(date2Obj).locale(currentLang).from(date1Obj, true);
}
