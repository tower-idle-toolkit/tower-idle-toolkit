const ONE_SECOND = 1;
const ONE_MINUTE = 60;
const ONE_HOUR = 3600;
const ONE_DAY = 86400;
const ONE_WEEK = 604800;
const THIRTY_DAYS = 2592000;
const NINETY_DAYS = 7776000;
const THREE_HUNDRED_SIXTY_DAYS = 31104000;

/**
 * @constant GEM_THRESHOLDS - The thresholds where Gem costs change in seconds
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

const ONE_SECOND_COST = 0.002083;
const ONE_MINUTE_COST = 0.125;
const ONE_HOUR_COST = 7.5;
const ONE_DAY_COST = 163;
const ONE_WEEK_COST = 1000;
const THIRTY_DAYS_COST = 3550;
const NINETY_DAYS_COST = 8000;
const THREE_HUNDRED_SIXTY_DAYS_COST = 25000;

/**
 * @constant GEM_COSTS - The minimum amounts each threshold costs in Gems
 */
export const GEM_COSTS = Object.freeze([
  ONE_SECOND_COST,
  ONE_MINUTE_COST,
  ONE_HOUR_COST,
  ONE_DAY_COST,
  ONE_WEEK_COST,
  THIRTY_DAYS_COST,
  NINETY_DAYS_COST,
  THREE_HUNDRED_SIXTY_DAYS_COST,
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
 * @param secondsRemaining - number - the length of the lab in seconds
 * @returns number - how many gems it costs to rush the lab,
 * rounded up to the nearest integer
 */
export const costToRushLab = (secondsRemaining: number) => {
  if (secondsRemaining >= THREE_HUNDRED_SIXTY_DAYS) {
    return THREE_HUNDRED_SIXTY_DAYS_COST;
  }

  if (secondsRemaining <= ONE_SECOND) {
    return 0;
  }

  let currentThreshold = 0;
  let currentThresholdCost = 0;
  let nextThreshold = 0;
  let nextThresholdCost = 0;

  if (secondsRemaining > NINETY_DAYS) {
    currentThreshold = NINETY_DAYS;
    currentThresholdCost = NINETY_DAYS_COST;
    nextThreshold = THREE_HUNDRED_SIXTY_DAYS;
    nextThresholdCost = THREE_HUNDRED_SIXTY_DAYS_COST;
  } else if (secondsRemaining > THIRTY_DAYS) {
    currentThreshold = THIRTY_DAYS;
    currentThresholdCost = THIRTY_DAYS_COST;
    nextThreshold = NINETY_DAYS;
    nextThresholdCost = NINETY_DAYS_COST;
  } else if (secondsRemaining > ONE_WEEK) {
    currentThreshold = ONE_WEEK;
    currentThresholdCost = ONE_WEEK_COST;
    nextThreshold = THIRTY_DAYS;
    nextThresholdCost = THIRTY_DAYS_COST;
  } else if (secondsRemaining > ONE_DAY) {
    currentThreshold = ONE_DAY;
    currentThresholdCost = ONE_DAY_COST;
    nextThreshold = ONE_WEEK;
    nextThresholdCost = ONE_WEEK_COST;
  } else if (secondsRemaining > ONE_HOUR) {
    currentThreshold = ONE_HOUR;
    currentThresholdCost = ONE_HOUR_COST;
    nextThreshold = ONE_DAY;
    nextThresholdCost = ONE_DAY_COST;
  } else if (secondsRemaining > ONE_MINUTE) {
    currentThreshold = ONE_MINUTE;
    currentThresholdCost = ONE_MINUTE_COST;
    nextThreshold = ONE_HOUR;
    nextThresholdCost = ONE_HOUR_COST;
  } else if (secondsRemaining > ONE_SECOND) {
    currentThreshold = ONE_SECOND;
    currentThresholdCost = ONE_SECOND_COST;
    nextThreshold = ONE_MINUTE;
    nextThresholdCost = ONE_MINUTE_COST;
  }

  let costPerSecondOverThreshold = (nextThresholdCost - currentThresholdCost) / (nextThreshold - currentThreshold);
  let secondsOverThreshold = secondsRemaining - currentThreshold;

  return Math.ceil(costPerSecondOverThreshold * secondsOverThreshold + currentThresholdCost);
};
