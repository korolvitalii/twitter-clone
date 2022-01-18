import formatDistanceStrict from 'date-fns/formatDistanceStrict';

export const formatter = (data: string | undefined): string => {
  if (data) {
    return formatDistanceStrict(new Date(data), new Date());
  }
  return 'Not correct date';
};
