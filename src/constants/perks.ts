export const STANDARD_PERK_CHANCE = 65;
export const ULTIMATE_PERK_CHANCE = 20;
export const TRADEOFF_PERK_CHANCE = 15;

export enum PerkCategories {
  STANDARD = 'STANDARD',
  ULTIMATE = 'ULTIMATE',
  TRADEOFF = 'TRADEOFF',
}

type ValueFormula = ({
  count,
  standardPerkLabLevel,
  tradeoffPerkLabLevel,
}: {
  count: number;
  standardPerkLabLevel: number;
  tradeoffPerkLabLevel: number;
}) => number;

export type Perk = {
  category: PerkCategories;
  maxLevel: number;
  getValue: ValueFormula;
  getDebuff: ValueFormula;
  formatValue: (value: number, debuff: number) => string;
};

export enum StandardPerk {
  MAX_HEALTH = 'MAX_HEALTH',
  DAMAGE = 'DAMAGE',
  HEALTH_REGEN = 'HEALTH_REGEN',
  COIN_BONUSES = 'COIN_BONUSES',
  BOUNCE_SHOT = 'BOUNCE_SHOT',
  INTEREST = 'INTEREST',
  LAND_MINE_DAMAGE = 'LAND_MINE_DAMAGE',
  ORBS = 'ORBS',
  FREE_UPGRADE_CHANCE = 'FREE_UPGRADE_CHANCE',
  DEFENSE_PERCENT = 'DEFENSE_PERCENT',
  PERK_WAVE_REQUIREMENT = 'PERK_WAVE_REQUIREMENT',
  UNLOCK_ULTIMATE_WEAPON = 'UNLOCK_ULTIMATE_WEAPON',
  INCREASE_GAME_SPEED = 'INCREASE_GAME_SPEED',
}

export enum UltimatePerk {
  SMART_MISSILES = 'SMART_MISSILES',
  POISON_SWAMP = 'POISON_SWAMP',
  DEATH_WAVE = 'DEATH_WAVE',
  GOLDEN_TOWER = 'GOLDEN_TOWER',
  CHAIN_LIGHTNING = 'CHAIN_LIGHTNING',
  CHRONO_FIELD = 'CHRONO_FIELD',
  INNER_LAND_MINES = 'INNER_LAND_MINES',
  BLACK_HOLE = 'BLACK_HOLE',
  SPOTLIGHT = 'SPOTLIGHT',
}

export enum TradeoffPerk {
  DAMAGE_BOSS_HEALTH = 'DAMAGE_BOSS_HEALTH',
  COINS_HEALTH = 'COINS_HEALTH',
  HEALTH_REGEN_LIFESTEAL = 'HEALTH_REGEN_LIFESTEAL',
  DAMAGE_DAMAGE = 'DAMAGE_DAMAGE',
  RANGE_RANGE = 'RANGE_RANGE',
  SPEED_DAMAGE = 'SPEED_DAMAGE',
  CASH_WAVE_KILL = 'CASH_WAVE_KILL',
  REGEN_HEALTH = 'REGEN_HEALTH',
  BOSS_HEALTH_SPEED = 'BOSS_HEALTH_SPEED',
  LIFESTEAL_KNOCKBACK = 'LIFESTEAL_KNOCKBACK',
}

const multiplicativePerk =
  (base: number): ValueFormula =>
  ({ count, standardPerkLabLevel }) =>
    (1 + base * count) * (1 + standardPerkLabLevel / 100);

const additivePerk =
  (base: number): ValueFormula =>
  ({ count, standardPerkLabLevel }) =>
    base * count * (1 + standardPerkLabLevel / 100);

const roundHundredths = (value: number) =>
  (Math.round(value * 100) / 100).toFixed(2);
const noDebuff = () => 0;

export const StandardPerks: Readonly<{
  [key in StandardPerk]: Readonly<Perk>;
}> = Object.freeze({
  [StandardPerk.MAX_HEALTH]: Object.freeze({
    category: PerkCategories.STANDARD,
    maxLevel: 5,
    getValue: multiplicativePerk(0.2),
    getDebuff: noDebuff,
    formatValue: (value: number) => `Max Health x${roundHundredths(value)}`,
  }),
  [StandardPerk.DAMAGE]: Object.freeze({
    category: PerkCategories.STANDARD,
    maxLevel: 5,
    getValue: multiplicativePerk(0.15),
    getDebuff: noDebuff,
    formatValue: (value: number) => `Damage x${roundHundredths(value)}`,
  }),
  [StandardPerk.HEALTH_REGEN]: Object.freeze({
    category: PerkCategories.STANDARD,
    maxLevel: 5,
    getValue: multiplicativePerk(0.6),
    getDebuff: noDebuff,
    formatValue: (value: number) => `Health Regen x${roundHundredths(value)}`,
  }),
  [StandardPerk.COIN_BONUSES]: Object.freeze({
    category: PerkCategories.STANDARD,
    maxLevel: 5,
    getValue: multiplicativePerk(0.15),
    getDebuff: noDebuff,
    formatValue: (value: number) => `Coin Bonuses x${roundHundredths(value)}`,
  }),
  [StandardPerk.BOUNCE_SHOT]: Object.freeze({
    category: PerkCategories.STANDARD,
    maxLevel: 3,
    getValue: ({ count }: { count: number }) => count,
    getDebuff: noDebuff,
    formatValue: (value: number) => `Bounce Shot +${value}`,
  }),
  [StandardPerk.INTEREST]: Object.freeze({
    category: PerkCategories.STANDARD,
    maxLevel: 5,
    getValue: multiplicativePerk(0.5),
    getDebuff: noDebuff,
    formatValue: (value: number) => `Interest x${roundHundredths(value)}`,
  }),
  [StandardPerk.LAND_MINE_DAMAGE]: Object.freeze({
    category: PerkCategories.STANDARD,
    maxLevel: 5,
    getValue: multiplicativePerk(2.5),
    getDebuff: noDebuff,
    formatValue: (value: number) =>
      `Land Mine Damage x${roundHundredths(value)}`,
  }),
  [StandardPerk.ORBS]: Object.freeze({
    category: PerkCategories.STANDARD,
    maxLevel: 2,
    getValue: ({ count }: { count: number }) => count,
    getDebuff: noDebuff,
    formatValue: (value: number) => `Orbs +${value}`,
  }),
  [StandardPerk.FREE_UPGRADE_CHANCE]: Object.freeze({
    category: PerkCategories.STANDARD,
    maxLevel: 5,
    getValue: additivePerk(5),
    getDebuff: noDebuff,
    formatValue: (value: number) =>
      `Free upgrade chance for all +${roundHundredths(value)}%`,
  }),
  [StandardPerk.DEFENSE_PERCENT]: Object.freeze({
    category: PerkCategories.STANDARD,
    maxLevel: 5,
    getValue: additivePerk(4),
    getDebuff: noDebuff,
    formatValue: (value: number) =>
      `Defence percent +${roundHundredths(value)}%`,
  }),
  [StandardPerk.PERK_WAVE_REQUIREMENT]: Object.freeze({
    category: PerkCategories.STANDARD,
    maxLevel: 3,
    getValue: additivePerk(20),
    getDebuff: noDebuff,
    formatValue: (value: number) =>
      `Perk wave requirement -${roundHundredths(value)}%`,
  }),
  [StandardPerk.UNLOCK_ULTIMATE_WEAPON]: Object.freeze({
    category: PerkCategories.STANDARD,
    maxLevel: 1,
    getValue: ({ count }: { count: number }) => count,
    getDebuff: noDebuff,
    formatValue: () => 'Unlock a random ultimate weapon',
  }),
  [StandardPerk.INCREASE_GAME_SPEED]: Object.freeze({
    category: PerkCategories.STANDARD,
    maxLevel: 1,
    getValue: additivePerk(1),
    getDebuff: noDebuff,
    formatValue: (value: number) =>
      `Increase your game speed by ${roundHundredths(value)}`,
  }),
});

export const UltimatePerks: Readonly<{
  [key in UltimatePerk]: Readonly<Perk>;
}> = Object.freeze({
  [UltimatePerk.SMART_MISSILES]: Object.freeze({
    category: PerkCategories.ULTIMATE,
    maxLevel: 1,
    getValue: () => 4,
    getDebuff: noDebuff,
    formatValue: () => '4 extra Smart missiles',
  }),
  [UltimatePerk.POISON_SWAMP]: Object.freeze({
    category: PerkCategories.ULTIMATE,
    maxLevel: 1,
    getValue: () => 1.5,
    getDebuff: noDebuff,
    formatValue: () => 'Swamp radius x1.5',
  }),
  [UltimatePerk.DEATH_WAVE]: Object.freeze({
    category: PerkCategories.ULTIMATE,
    maxLevel: 1,
    getValue: () => 1,
    getDebuff: noDebuff,
    formatValue: () => '+1 wave on death wave',
  }),
  [UltimatePerk.GOLDEN_TOWER]: Object.freeze({
    category: PerkCategories.ULTIMATE,
    maxLevel: 1,
    getValue: () => 1.5,
    getDebuff: noDebuff,
    formatValue: () => 'Golden tower bonus x1.5',
  }),
  [UltimatePerk.CHAIN_LIGHTNING]: Object.freeze({
    category: PerkCategories.ULTIMATE,
    maxLevel: 1,
    getValue: () => 2,
    getDebuff: noDebuff,
    formatValue: () => 'Chain lightning damage x2',
  }),
  [UltimatePerk.CHRONO_FIELD]: Object.freeze({
    category: PerkCategories.ULTIMATE,
    maxLevel: 1,
    getValue: () => 1.5,
    getDebuff: noDebuff,
    formatValue: () => 'Chrono field radius x1.5',
  }),
  [UltimatePerk.INNER_LAND_MINES]: Object.freeze({
    category: PerkCategories.ULTIMATE,
    maxLevel: 1,
    getValue: () => 1,
    getDebuff: noDebuff,
    formatValue: () => 'Extra set of inner mines',
  }),
  [UltimatePerk.BLACK_HOLE]: Object.freeze({
    category: PerkCategories.ULTIMATE,
    maxLevel: 1,
    getValue: () => 12,
    getDebuff: noDebuff,
    formatValue: () => 'Black hole duration +12s',
  }),
  [UltimatePerk.SPOTLIGHT]: Object.freeze({
    category: PerkCategories.ULTIMATE,
    maxLevel: 1,
    getValue: () => 1.5,
    getDebuff: noDebuff,
    formatValue: () => 'Spotlight Bonus x1.5',
  }),
});

const tradeoffBuff =
  (base: number): ValueFormula =>
  ({ tradeoffPerkLabLevel }) =>
    base * (1 + tradeoffPerkLabLevel / 100);

export const TradeoffPerks: Readonly<{
  [key in TradeoffPerk]: Readonly<Perk>;
}> = Object.freeze({
  [TradeoffPerk.DAMAGE_BOSS_HEALTH]: Object.freeze({
    category: PerkCategories.TRADEOFF,
    maxLevel: 1,
    getValue: tradeoffBuff(1.5),
    getDebuff: () => 8,
    formatValue: (value: number, debuff: number) =>
      `${roundHundredths(
        value,
      )} tower damage, but bosses have x${roundHundredths(debuff)} health`,
  }),
  [TradeoffPerk.COINS_HEALTH]: Object.freeze({
    category: PerkCategories.TRADEOFF,
    maxLevel: 1,
    getValue: tradeoffBuff(1.8),
    getDebuff: () => 70,
    formatValue: (value: number, debuff: number) =>
      `x${roundHundredths(
        value,
      )} coins, but tower max health - ${roundHundredths(debuff)}%`,
  }),
  [TradeoffPerk.HEALTH_REGEN_LIFESTEAL]: Object.freeze({
    category: PerkCategories.TRADEOFF,
    maxLevel: 1,
    getValue: tradeoffBuff(50),
    getDebuff: () => 90,
    formatValue: (value: number, debuff: number) =>
      `Enemies have -${roundHundredths(
        value,
      )}% health, but tower health regen and lifesteal -${roundHundredths(
        debuff,
      )}%`,
  }),
  [TradeoffPerk.DAMAGE_DAMAGE]: Object.freeze({
    category: PerkCategories.TRADEOFF,
    maxLevel: 1,
    getValue: tradeoffBuff(50),
    getDebuff: () => 50,
    formatValue: (value: number, debuff: number) =>
      `Enemies damage -${roundHundredths(
        value,
      )}%, but tower damage -${roundHundredths(debuff)}%`,
  }),
  [TradeoffPerk.RANGE_RANGE]: Object.freeze({
    category: PerkCategories.TRADEOFF,
    maxLevel: 1,
    getValue: () => 10,
    getDebuff: () => 3,
    formatValue: (value: any, debuff: number) =>
      `Ranged enemies attack distance reduced, but ranged enemies damage x${roundHundredths(
        debuff,
      )}`,
  }),
  [TradeoffPerk.SPEED_DAMAGE]: Object.freeze({
    category: PerkCategories.TRADEOFF,
    maxLevel: 1,
    getValue: tradeoffBuff(50),
    getDebuff: () => 2.5,
    formatValue: (value: number, debuff: number) =>
      `Enemies speed -${roundHundredths(
        value,
      )}%, but enemies damage x${roundHundredths(debuff)}`,
  }),
  [TradeoffPerk.CASH_WAVE_KILL]: Object.freeze({
    category: PerkCategories.TRADEOFF,
    maxLevel: 1,
    getValue: () => 12,
    getDebuff: () => 100,
    formatValue: (value: number) =>
      `x${value} cash per wave, but enemy kills don't give cash`,
  }),
  [TradeoffPerk.REGEN_HEALTH]: Object.freeze({
    category: PerkCategories.TRADEOFF,
    maxLevel: 1,
    getValue: tradeoffBuff(8),
    getDebuff: () => 60,
    formatValue: (value: number, debuff: number) =>
      `Tower health regen x${roundHundredths(
        value,
      )}, but tower max health -${roundHundredths(debuff)}%`,
  }),
  [TradeoffPerk.BOSS_HEALTH_SPEED]: Object.freeze({
    category: PerkCategories.TRADEOFF,
    maxLevel: 1,
    getValue: ({ tradeoffPerkLabLevel }: { tradeoffPerkLabLevel: number }) =>
      70 + (1 + tradeoffPerkLabLevel / 200), // this one has lab bonus halved an extra time for some reason?
    getDebuff: () => 50,
    formatValue: (value: number, debuff: number) =>
      `Boss health -${roundHundredths(
        value,
      )}%, but boss speed +${roundHundredths(debuff)}%`,
  }),
  [TradeoffPerk.LIFESTEAL_KNOCKBACK]: Object.freeze({
    category: PerkCategories.TRADEOFF,
    maxLevel: 1,
    getValue: tradeoffBuff(2.5),
    getDebuff: () => 70,
    formatValue: (value: number, debuff: number) =>
      `Lifesteal x${roundHundredths(
        value,
      )}, but knockback force -${roundHundredths(debuff)}%`,
  }),
});

export const Perks: Readonly<{
  [key in StandardPerk | UltimatePerk | TradeoffPerk]: Readonly<Perk>;
}> = Object.freeze({
  ...StandardPerks,
  ...UltimatePerks,
  ...TradeoffPerks,
});
