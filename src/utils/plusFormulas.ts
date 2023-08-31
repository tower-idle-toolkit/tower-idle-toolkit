/**
 * @function goldenComboBonus - get the combo bonus for a number of kills given the current bonus value
 *
 * @param bonus - The value of the Golden Combo bonus upgrade
 * @param combo - The number of kills
 * @returns number - the extra bonus multiplier gained at the end of the combo, additional to the already earned coins
 */

export const goldenComboBonus = (bonus: number, combo: number) =>
  (1 + bonus / 100) ** combo - 1;

/**
 * @function getMineCharge - Get the multiplier for inner land mines charge after a number of seconds have gone by
 * @param bonus - the value of the Charge Mines upgrade
 * @param seconds - how many seconds have elapsed while charging the mines
 *
 * @returns number - the multiplier on the base mine damage done to the enemy
 */
export const getMineCharge = (bonus: number, seconds: number) =>
  1 + bonus * seconds;
