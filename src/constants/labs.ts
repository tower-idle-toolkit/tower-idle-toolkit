import labJson from 'data/labs.json';

/**
 * @type LabLevel - A LabLevel has the format
 * ```ts
 * { DURATION: number; COST: number; }
 * ```
 */
export type LabLevel = {
  DURATION: number;
  COST: number;
};

/**
 * @type Lab - A Lab config maps valid levels (1..max) to LabLevels
 * */
export type Lab = {
  [level: number]: Readonly<LabLevel>;
};

/**
 * @type LabMap - A LabMap maps the English Lab Name to the Lab config
 */
export type LabMap = {
  [name: string]: Readonly<Lab>;
};

/**
 * @constnat Labs - A Map of All Labs in the game
 *
 * Lab names are all in English and match Tower Data Collection.
 *
 * This is a map of lab names, and each contain a nested object mapping their levels to an Object containing DURATION and COST.
 *
 * ```ts
 * {
 *   [labName: string]: {
 *     [level: number]: {
 *       DURATION: number;
 *       COST: number;
 *     } | undefined
 *   } | undefined
 * }
 * ```
 *
 *
 * Note that Lab Speed and Lab Discount already have their own modifiers applied to their values, so to
 * apply relics, you will have to divide out their bonuses, scale the bonus by the relic, and re-apply it
 */
export const LABS = Object.freeze(
  Object.entries(labJson).reduce((labMap, [name, lab]: any) => {
    // eslint-disable-next-line no-param-reassign
    labMap[name] = Object.freeze(
      Object.keys(lab)
        .filter(
          level =>
            lab[level].DURATION !== null && lab[level].DURATION !== undefined,
        )
        .reduce((current, level) => {
          // eslint-disable-next-line no-param-reassign
          current[parseInt(level, 10)] = Object.freeze(lab[level]);
          return current;
        }, {} as Lab),
    );
    return labMap;
  }, {} as LabMap),
);

/**
 * @function maxLevel - gets the max level of a lab
 *
 * @param labName - the name of the lab in english
 * @returns the max level of the lab, or 0 if the lab does not exist
 */
export const maxLevel = (labName: string) => {
  const lab = LABS[labName];
  if (!lab) return 0;
  return Object.entries(lab).reduce((current, [level]) => {
    const levelNumber = parseInt(level, 10);
    return Math.max(levelNumber, current);
  }, 0);
};

/**
 * @constant ALL_LABS - A list of all the names of valid labs
 */
export const ALL_LABS = Object.freeze(Object.keys(LABS));

/**
 * @constant MAX_INTEREST_LEVELS - A map of Max Interest lab levels to its value
 */
export const MAX_INTEREST_LEVELS: { [level: number]: number | undefined } =
  Object.freeze({
    0: 50,
    1: 100,
    2: 200,
    3: 300,
    4: 500,
    5: 700,
    6: 1000,
    7: 1500,
    8: 2000,
    9: 2500,
    10: 3500,
    11: 5000,
    12: 7500,
    13: 10000,
    14: 12500,
    15: 15000,
  });

const maxInterest = (level: number) => MAX_INTEREST_LEVELS[level] || 50;

const levelToMultiplier =
  (scale: number, base: number = 1) =>
  (level: number) =>
    base + level * scale;

const levelToAddition =
  (scale: number, base: number = 0) =>
  (level: number) =>
    base + level * scale;

/**
 * @constant LabValues -  A map of Lab Names to a function to get its value for any given level.
 *
 * i.e. to find the value of a level 7 Max Interest Lab, use
 * ```ts
 * LabValues['Max Interest'](7)
 * ```
 * For labs without an obvious numeric value (i.e. unlock labs), it just returns the level of the lab.
 */
export const LabValues: Readonly<{
  [lab: string]: (level: number) => number | undefined;
}> = Object.freeze({
  'Starting Cash': levelToAddition(5),
  'Workshop Attack Discount': levelToAddition(0.5),
  'Workshop Defense Discount': levelToAddition(0.5),
  'Workshop Utility Discount': levelToAddition(0.5),
  'Labs Coin Discount': levelToAddition(0.3),
  'Lab Speed': levelToMultiplier(0.02),
  'Game Speed': levelToAddition(0.5, 1.5),
  'Buy Multiplier': levelToAddition(1),
  'More Round Stats': levelToAddition(1),
  'Target Priority': levelToAddition(1),
  'Card Presets': levelToAddition(1),
  'Workshop Respec': levelToAddition(1),
  Damage: levelToMultiplier(0.02),
  'Attack Speed': levelToMultiplier(0.02),
  'Critical Factor': levelToMultiplier(0.03),
  Range: levelToMultiplier(0.02),
  'Damage / Meter': levelToMultiplier(0.02),
  'Super Crit Chance': levelToAddition(0.1),
  'Super Crit Mult': levelToMultiplier(0.02),
  'Max Rend Armor Multiplier': levelToAddition(25, 800),
  Health: levelToMultiplier(0.03),
  'Health Regen': levelToMultiplier(0.03),
  'Defense Absolute': levelToMultiplier(0.03),
  'Defense %': levelToAddition(0.2),
  'Orbs Speed': levelToAddition(0.1),
  'Land Mine Damage': levelToAddition(10),
  'Land Mine Decay': levelToAddition(0.5),
  'Shockwave Size': levelToAddition(0.05),
  'Orb Boss Hit': levelToAddition(0.2),
  'Wall Health': levelToAddition(10),
  'Wall Rebuild': levelToAddition(-10),
  'Wall Regen': levelToAddition(10),
  'Wall Thorns': levelToAddition(1),
  'Wall Invincibility': levelToAddition(1),
  'Cash Bonus': levelToMultiplier(0.02),
  'Cash / Wave': levelToMultiplier(0.02),
  'Coins / Kill Bonus': levelToMultiplier(0.02),
  'Coins / Wave': levelToMultiplier(0.02),
  Interest: levelToMultiplier(0.02),
  'Max Interest': maxInterest,
  'Package After Boss': levelToAddition(1),
  'Enemy Attack Level Skip': levelToAddition(0.1),
  'Enemy Health Level Skip': levelToAddition(0.1),
  'Missile Despawn Time': levelToAddition(1),
  'Chrono Field Duration': levelToAddition(1),
  'Chrono Field Reduction %': levelToAddition(0.5, 10),
  'Swamp Radius': levelToAddition(0.02),
  'Swamp Stun Time': levelToAddition(0.1, 1),
  'Swamp Stun Chance': levelToAddition(1, 5),
  'Shock Chance': levelToAddition(0.5, 2.5),
  'Shock Multiplier': levelToAddition(0.04, 1.1),
  'Death Wave Health': levelToAddition(0.01),
  'Death Wave Coin bonus': levelToMultiplier(0.05),
  'Inner Mine Blast Radius': levelToAddition(0.1),
  'Inner Mine Rotation Speed': levelToAddition(0.8),
  'Chrono Field Range': levelToAddition(3),
  'Missile Amplifier': levelToMultiplier(1.5),
  'Swamp Stun': levelToAddition(1),
  'Chrono Field Damage Reduction': levelToAddition(1),
  'Missile Barrage Quantity': levelToAddition(5, 20),
  'Missile Radius': levelToAddition(0.05, 0.3),
  'Missiles Explosion': levelToAddition(1),
  'Chain Lightning Shock': levelToAddition(1),
  'Golden Tower Bonus': levelToAddition(0.15),
  'Golden Tower Duration': levelToAddition(1),
  'Missile Barrage': levelToAddition(1),
  'Inner Mine Stun': levelToAddition(1),
  'Black Hole Damage': levelToAddition(0.2),
  'Extra Black Hole': levelToAddition(1),
  'Blackhole Coin Bonus': levelToMultiplier(0.5),
  'Spotlight Coin Bonus': levelToMultiplier(0.1),
  'Spotlight Missiles': levelToAddition(-1, 20),
  'Second Wind Blast': levelToAddition(0.25),
  'Double Death Ray': levelToAddition(1),
  'Inner Orb Adjuster': levelToAddition(1),
  'Extra Inner Orbs': levelToAddition(1),
  'Energy Shield Extra Hit': levelToAddition(1),
  'Unlock Perks': levelToAddition(1),
  'Waves Required': levelToAddition(1),
  'Auto Pick Perks': levelToAddition(1),
  'Standard Perks Bonus': levelToAddition(1),
  'Perk Option Quantity': levelToAddition(1),
  'First Perk Choice': levelToAddition(1),
  'Ban Perks': levelToAddition(1),
  'Improve Trade-off Perks': levelToAddition(1),
  'Recovery Package Amount': levelToAddition(0.4),
  'Recovery Package Max': levelToAddition(0.01),
  'Recovery Package Chance': levelToAddition(0.2),
  'Extra Orb Adjuster': levelToAddition(1),
  'Super Tower Bonus': levelToMultiplier(0.03),
  'Flame Bot Frequency': levelToAddition(0.5),
  'Thunder Bot Frequency': levelToAddition(0.5),
  'Gold Bot Frequency': levelToAddition(0.5),
  'Amp Bot Frequency': levelToAddition(0.5),
  'Common Enemy Health': levelToAddition(-0.4),
  'Common Enemy Attack': levelToAddition(-0.4),
  'Fast Enemy Health': levelToAddition(-0.4),
  'Fast Enemy Attack': levelToAddition(-0.4),
  'Fast Enemy Speed': levelToAddition(-0.4),
  'Tank Enemy Health': levelToAddition(-0.4),
  'Tank Enemy Attack': levelToAddition(-0.4),
  'Ranged Enemy Health': levelToAddition(-0.4),
  'Ranged Enemy Attack': levelToAddition(-0.4),
  'Boss Health': levelToAddition(-0.3),
  'Boss Attack': levelToAddition(-0.3),
  'Protector Health': levelToAddition(-0.3),
  'Protector Radius': levelToAddition(-0.3),
  'Protector Damage Reduction': levelToAddition(-0.3),
  'Light Speed Shots': levelToAddition(1),
  'Black Hole disable Ranged Enemies': levelToAddition(1),
});
