/**
 * @function damageFormula - Takes in the values necessary to compute the damage for Landmines or an Ultimate Weapon, and returns the actual value
 *
 * Takes an object with the following params (all values are the value displayed in run, with perks, cards, labs, etc applied):
 * @param damagePercent - number; // the % value displayed on the tooltip when clicking the UW (on the button itself for Land Mines). If it says 321%, pass in 321. For Smart Missiles, since it uses an x and not a %, multiply by 100 first.
 * @param damage - number; // Your workshop Damage value, as displayed in the Attack tab midrun
 * @param critFactor - number; // Your workshop Crit Factor value, as displayed in the Attack tab midrun
 * @param critChance - number; // your Workshop Crit Chance value, as displayed in the Attack tab midrun
 * @param superCritMult - number; // your Workshop Super Crit Mult value, as displayed in the attack tab midrun
 * @param superCritChance - number; // your Workshop Super Crit Chance value, as displayed in the attack tab midrun
 * @returns number - the actual computed damage value
 */
export const damageFormula = ({
  damagePercent,
  damage,
  critFactor,
  critChance,
  superCritMult,
  superCritChance,
}: {
  damagePercent: number;
  damage: number;
  critFactor: number;
  critChance: number;
  superCritMult: number;
  superCritChance: number;
}) =>
  (damagePercent / 100) *
  damage *
  (1 + (critFactor * critChance) / 100) *
  (1 + (((superCritMult * critChance) / 100) * superCritChance) / 100);
