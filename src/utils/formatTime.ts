export const SECOND = 1;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
export const YEAR = DAY * 365;

/**
 * @function formatTime - Converts seconds to a nicely formatted string
 *
 * @param time - number in seconds
 * @returns string - nicely formatted as <> years, <> days, <>h, <>m, <>s, omitting values as necessary for clarity
 */
export const formatTime = (time: number) => {
  const years = Math.floor(time / YEAR);
  const afterYears = time % YEAR;
  const days = Math.floor(afterYears / DAY);
  const afterDays = afterYears % DAY;
  const hours = Math.floor(afterDays / HOUR);
  const afterHours = afterDays % HOUR;
  const minutes = Math.floor(afterHours / MINUTE);
  const seconds = Math.floor(afterHours % MINUTE);
  const format: string[] = [];
  if (years > 0) format.push(`${years} years`);
  if (days > 0 || years > 0) format.push(`${days} days`);
  if (hours > 0) format.push(`${hours}h`);
  if (minutes > 0 || hours > 0) format.push(`${minutes}m`);
  format.push(`${seconds.toFixed(0)}s`);
  return format.join(', ');
};
