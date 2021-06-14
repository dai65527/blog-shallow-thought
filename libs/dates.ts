export const getDateString = (date: Date): string =>
  `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;

export const utcStringToDateString = (dateString: string): string => {
  return getDateString(new Date(dateString));
};
