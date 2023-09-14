const ONE_SECOND = 1;
const ONE_MINUTE = 60;
const ONE_HOUR = 3600;
const ONE_DAY = 86400;
const ONE_WEEK = 604800;
const THIRTY_DAYS = 2592000;
const NINETY_DAYS = 7776000;
const THREE_HUNDRED_SIXTY_DAYS = 31104000;

/**
 * @constant GEM_THRESHOLDS - The thresholds where Gems change, in seconds
 */
export const GEM_THRESHOLDS = Object.freeze([
  ONE_SECOND,
  ONE_MINUTE,
  ONE_HOUR,
  ONE_DAY,
  ONE_WEEK,
  THIRTY_DAYS,
  NINETY_DAYS,
  THREE_HUNDRED_SIXTY_DAYS,
]);

/**
 * @function costToRushLab - Tells you how many gems to rush a lab of a specific length
 *
 * @remarks
 * The formula works as follows:
 * - For periods over three hundred and sixty days, the cost is 25000 gems.
 * - For all periods between one second and three hundred and sixty days
 *   (inclusive), the cost is a flat amount (depending on the tier) plus a constant cost for
 *   each second between the current tier and the next.
 *
 * @param seconds - number - the length of the lab in seconds
 * @returns number - how many gems it costs to rush the lab,
 * rounded up to the nearest integer
 */
export const costToRushLab = (seconds: number) => {
  let gems = 0;
  if (seconds > THREE_HUNDRED_SIXTY_DAYS) {
    gems = 25000;
  } else if (seconds > NINETY_DAYS) {
    gems = (17000 / (THREE_HUNDRED_SIXTY_DAYS - NINETY_DAYS)) * (seconds - NINETY_DAYS) + 8000;
  } else if (seconds > THIRTY_DAYS) {
    gems = (4450 / (NINETY_DAYS - THIRTY_DAYS)) * (seconds - THIRTY_DAYS) + 3550;
  } else if (seconds > ONE_WEEK) {
    gems = (2550 / (THIRTY_DAYS - ONE_WEEK)) * (seconds - ONE_WEEK) + 1000;
  } else if (seconds > ONE_DAY) {
    gems = (837 / (ONE_WEEK - ONE_DAY)) * (seconds - ONE_DAY) + 163;
  } else if (seconds > ONE_HOUR) {
    gems = (155.5 / (ONE_DAY - ONE_HOUR)) * (seconds - ONE_HOUR) + 7.5;
  } else if (seconds > ONE_MINUTE) {
    gems = (7.375 / (ONE_HOUR - ONE_MINUTE)) * (seconds - ONE_MINUTE) + 0.125;
  } else if (seconds > ONE_SECOND) {
    gems = (0.122917 / (ONE_MINUTE - ONE_SECOND)) * (seconds - ONE_SECOND) + 0.002083;
  } else {
    gems = 0;
  }

  return Math.ceil(gems);
};
