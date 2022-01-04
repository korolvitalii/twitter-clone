import formatDistance from 'date-fns/formatDistance';
import { enGB } from 'date-fns/locale';

export const formatter = (data: string | undefined): string => {
  if (data) {
    return formatDistance(new Date(data), new Date(), {
      addSuffix: true,
      locale: enGB,
    });
  }
  return 'Not correct date';
};
