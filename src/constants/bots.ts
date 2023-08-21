/**
 * @constant BOT_UNLOCK_COSTS - Medal costs to unlock each successive bot
 */
export const BOT_UNLOCK_COSTS = [150, 300, 600, 900];

/**
 * @type BotUpgrade
 * A BotUpgrade has the format
 * ```ts
 * {
 *   baseValue: number; // value with 0 additional upgrades
 *   medalUpgrades: number; // how many times the stat can be upgraded. This can be different even for the same upgrade on different bots
 *   getValue: (level: number, lab?: number) => number; // specify the level (number of medal upgrades) and the lab level for the appropriate stat (if any, default is 0), and get back the numerical value for the stat
 *   formatValue: (value: number) => string; // converts the value returned by getValue into the English text displayed in game, to generate a label.
 * }
 * ```
 */
export type BotUpgrade = {
  baseValue: number;
  medalUpgrades: number;
  labUpgrades?: number;
  getValue: (level: number, lab?: number) => number;
  formatValue: (value: number) => string;
};

/**
 * @type Bot - A Bot maps the upgrade name to the BotUpgrade format specified previously
 */
export type Bot = {
  [upgrade: string]: Readonly<BotUpgrade> | undefined;
};

const frequencyFormula =
  (base: number) =>
  (level: number, lab: number = 0) =>
    (base - 0.3 * level) * (1 - lab / 100);
const valueFormula =
  (base: number = 0, growth: number = 0) =>
  (level: number) =>
    base + growth * level;
const formatBonus = (bonus: number) => `${bonus.toFixed(2)}x`;
const formatRange = (range: number) => `${range.toFixed(2)}m`;
const formatDuration = (duration: number) => `${duration.toFixed(2)}s`;

/**
 * @constant GOLDEN_BOT - Golden Bot
 */
export const GOLDEN_BOT: Readonly<Bot> = Object.freeze({
  Bonus: Object.freeze({
    baseValue: 2,
    medalUpgrades: 20,
    getValue: valueFormula(2, 0.2),
    formatValue: formatBonus,
  }),
  Frequency: Object.freeze({
    baseValue: 25,
    medalUpgrades: 20,
    labUpgrades: 20,
    getValue: frequencyFormula(25),
    formatValue: formatDuration,
  }),
  Range: Object.freeze({
    baseValue: 20,
    medalUpgrades: 15,
    getValue: valueFormula(20, 2),
    formatValue: formatRange,
  }),
});

/**
 * @constant AMPLIFY_BOT - Amplify Bot
 */
export const AMPLIFY_BOT: Readonly<Bot> = Object.freeze({
  Bonus: Object.freeze({
    baseValue: 3.5,
    medalUpgrades: 20,
    getValue: valueFormula(2, 0.4),
    formatValue: formatBonus,
  }),
  Frequency: Object.freeze({
    baseValue: 25,
    medalUpgrades: 20,
    labUpgrades: 20,
    getValue: frequencyFormula(25),
    formatValue: formatDuration,
  }),
  Range: Object.freeze({
    baseValue: 25,
    medalUpgrades: 15,
    getValue: valueFormula(25, 2),
    formatValue: formatRange,
  }),
});

/**
 * @constant THUNDER_BOT - Thunder Bot
 */
export const THUNDER_BOT: Readonly<Bot> = Object.freeze({
  Duration: Object.freeze({
    baseValue: 4,
    medalUpgrades: 20,
    getValue: valueFormula(4, 0.4),
    formatValue: formatBonus,
  }),
  Frequency: Object.freeze({
    baseValue: 13,
    medalUpgrades: 15,
    labUpgrades: 20,
    getValue: frequencyFormula(13),
    formatValue: formatDuration,
  }),
  Range: Object.freeze({
    baseValue: 25,
    medalUpgrades: 15,
    getValue: valueFormula(25, 3),
    formatValue: formatRange,
  }),
});

/**
 * @constant FLAME_BOT - Flame Bot
 */
export const FLAME_BOT: Readonly<Bot> = Object.freeze({
  Damage: Object.freeze({
    baseValue: 5000,
    medalUpgrades: 20,
    getValue: valueFormula(5000, 800),
    formatValue: (value: number) => `${value.toFixed(0)}%`,
  }),
  Frequency: Object.freeze({
    baseValue: 8,
    medalUpgrades: 15,
    labUpgrades: 20,
    getValue: frequencyFormula(8),
    formatValue: formatDuration,
  }),
  Range: Object.freeze({
    baseValue: 30,
    medalUpgrades: 15,
    getValue: valueFormula(30, 4),
    formatValue: formatRange,
  }),
});

/**
 * @constant BOTS - All of the available bots as an object mapping their In Game English Name to the config for that bot.
 */
export const BOTS = Object.freeze({
  'Golden Bot': GOLDEN_BOT,
  'Amplify Bot': AMPLIFY_BOT,
  'Thunder Bot': THUNDER_BOT,
  'Flame Bot': FLAME_BOT,
});
