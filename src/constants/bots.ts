export const BOT_UNLOCK_COSTS = [150, 300, 600, 900];
export type BotUpgrade = {
  baseValue: number;
  medalUpgrades: number;
  labUpgrades?: number;
  getValue: (level: number, lab?: number) => number;
  formatValue: (value: number) => string;
};

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

export const AMPLIFY_BOT: Bot = Object.freeze({
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

export const THUNDER_BOT: Bot = Object.freeze({
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

export const FLAME_BOT: Bot = Object.freeze({
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

export const BOTS = Object.freeze({
  'Golden Bot': GOLDEN_BOT,
  'Amplify Bot': AMPLIFY_BOT,
  'Thunder Bot': THUNDER_BOT,
  'Flame Bot': FLAME_BOT,
});
