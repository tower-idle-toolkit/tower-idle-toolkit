const SECOND = 1;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const YEAR = DAY * 365;

/**
 * @function formatTimePart - Converts part of time to its corresponding formatted string part
 *
 * @param time - number in seconds
 * @param format - type of time (seconds, minutes, hours, etc.)
 * @param formatCutoff - when it should cut off the value and reset
 * @param text - text to be added after value
 * @param textSingle - text to be added after value if value is 1
 * @returns string | null - returns the text or null
 */
const formatTimePart = (time: number, format: number, formatCutoff?: number, text?: string, textSingle?: string): string | null => {
  const value = formatCutoff ? Math.floor(time / format) % formatCutoff : Math.floor(time / format);
  return value != 0 ? `${value}${value == 1 && textSingle ? textSingle : text}` : null;
}

/**
 * @function formatTime - Converts seconds to a nicely formatted string
 *
 * @param time - number in seconds
 * @returns string - nicely formatted as <> years, <> days, <>h, <>m, <>s, omitting values as necessary for clarity
 */
export const formatTime = (time: number) => {
  const years = formatTimePart(time, YEAR, undefined, " years");
  const days = formatTimePart(time, DAY, 365, " days");
  const hours = formatTimePart(time, HOUR, 24, "h");
  const minutes = formatTimePart(time, MINUTE, 60, "m");
  const seconds = formatTimePart(time, SECOND, 60, "s");

  return [years, days, hours, minutes, seconds].filter((v) => v).join(", ");
};
