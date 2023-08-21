/**
 * @constant DAMAGE_CARD - Maps Damage Card stars to value, 0 is unequipped
 */
export const DAMAGE_CARD = Object.freeze({
  0: 1,
  1: 1.5,
  2: 2,
  3: 2.4,
  4: 2.8,
  5: 3.2,
  6: 3.6,
  7: 4,
});

/**
 * @constant ASPD_CARD - Maps Attack Speed Card stars to value, 0 is unequipped
 */
export const ASPD_CARD = Object.freeze({
  0: 1,
  1: 1.25,
  2: 1.4,
  3: 1.55,
  4: 1.7,
  5: 1.85,
  6: 2,
  7: 2.15,
});

/**
 * @constant HEALTH_CARD - Maps Health Card stars to value, 0 is unequipped
 */
export const HEALTH_CARD = Object.freeze({
  0: 1,
  1: 1.5,
  2: 2,
  3: 2.4,
  4: 2.8,
  5: 3.2,
  6: 3.6,
  7: 4,
});

/**
 * @constant REGEN_CARD - Maps Regen Card stars to value, 0 is unequipped
 */
export const REGEN_CARD = Object.freeze({
  0: 1,
  1: 1.4,
  2: 1.6,
  3: 1.8,
  4: 2,
  5: 2.2,
  6: 2.4,
  7: 2.6,
});

/**
 * @constant RANGE_CARD - Maps Range Card stars to value, 0 is unequipped
 */
export const RANGE_CARD = Object.freeze({
  0: 1,
  1: 1.15,
  2: 1.2,
  3: 1.25,
  4: 1.3,
  5: 1.35,
  6: 1.4,
  7: 1.45,
});

/**
 * @constant CASH_CARD - Maps Cash Card stars to value, 0 is unequipped
 */
export const CASH_CARD = Object.freeze({
  0: 1,
  1: 1.2,
  2: 1.4,
  3: 1.6,
  4: 1.8,
  5: 2,
  6: 2.2,
  7: 2.4,
});

/**
 * @constant COIN_CARD - Maps Coin Card stars to value, 0 is unequipped
 */
export const COIN_CARD = Object.freeze({
  0: 1,
  1: 1.15,
  2: 1.2,
  3: 1.25,
  4: 1.3,
  5: 1.35,
  6: 1.4,
  7: 1.45,
});

/**
 * @constant SLOW_AURA_CARD - Maps Slow Aura Card stars to value, 0 is unequipped
 */
export const SLOW_AURA_CARD = Object.freeze({
  0: 0,
  1: 13,
  2: 16,
  3: 19,
  4: 22,
  5: 25,
  6: 28,
  7: 31,
});

/**
 * @constant CRIT_CHANCE_CARD - Maps Crit Chance Card stars to value, 0 is unequipped
 */
export const CRIT_CHANCE_CARD = Object.freeze({
  0: 0,
  1: 5,
  2: 6,
  3: 7,
  4: 8,
  5: 9,
  6: 10,
  7: 11,
});

/**
 * @constant ENEMY_BALANCE_CARD - Maps Enemy Balance Card stars to value, 0 is unequipped
 */
export const ENEMY_BALANCE_CARD = Object.freeze({
  0: 1,
  1: 1.3,
  2: 1.4,
  3: 1.5,
  4: 1.6,
  5: 1.7,
  6: 1.8,
  7: 1.9,
});

/**
 * @constant EXTRA_DEFENSE_CARD - Maps Extra Defense Card stars to value, 0 is unequipped
 */
export const EXTRA_DEFENSE_CARD = Object.freeze({
  0: 0,
  1: 5,
  2: 6,
  3: 7,
  4: 8,
  5: 9,
  6: 10,
  7: 11,
});

/**
 * @constant FORTRESS_CARD - Maps Fortress Card stars to value, 0 is unequipped
 */
export const FORTRESS_CARD = Object.freeze({
  0: 1,
  1: 1.3,
  2: 1.45,
  3: 1.6,
  4: 1.75,
  5: 1.9,
  6: 2.05,
  7: 2.2,
});

/**
 * @constant COMMON_CARDS - Maps Common cards from their in game English names to their config objects
 */
export const COMMON_CARDS = Object.freeze({
  Damage: DAMAGE_CARD,
  'Attack Speed': ASPD_CARD,
  Health: HEALTH_CARD,
  'Health Regen': REGEN_CARD,
  Range: RANGE_CARD,
  Cash: CASH_CARD,
  Coins: COIN_CARD,
  'Slow Aura': SLOW_AURA_CARD,
  'Critical Chance': CRIT_CHANCE_CARD,
  'Enemy Balance': ENEMY_BALANCE_CARD,
  'Extra Defense': EXTRA_DEFENSE_CARD,
  Fortress: FORTRESS_CARD,
});

/**
 * @constant INTRO_SPRINT_CARD - Maps Intro Sprint Card stars to value, 0 is unequipped
 */
export const INTRO_SPRINT_CARD = Object.freeze({
  0: 0,
  1: 20,
  2: 25,
  3: 30,
  4: 35,
  5: 40,
  6: 45,
  7: 50,
});

/**
 * @constant WAVE_SKIP_CARD - Maps Wave Skip Card stars to value, 0 is unequipped
 */
export const WAVE_SKIP_CARD = Object.freeze({
  0: 0,
  1: 9,
  2: 10,
  3: 11,
  4: 13,
  5: 15,
  6: 17,
  7: 19,
});

/**
 * @constant CRIT_COIN_CARD - Maps Crit Coin Card stars to value, 0 is unequipped
 */
export const CRIT_COIN_CARD = Object.freeze({
  0: 0,
  1: 15,
  2: 18,
  3: 21,
  4: 24,
  5: 27,
  6: 30,
  7: 33,
});

/**
 * @constant PLASMA_CANNON_CARD - Maps Plasma Cannon Card stars to value, 0 is unequipped
 */
export const PLASMA_CANNON_CARD = Object.freeze({
  0: 0,
  1: 30,
  2: 34,
  3: 38,
  4: 42,
  5: 46,
  6: 50,
  7: 54,
});

/**
 * @constant EXTRA_ORB_CARD - Maps Extra Orb Card stars to value, 0 is unequipped
 */
export const EXTRA_ORB_CARD = Object.freeze({
  0: 0,
  1: 0.3,
  2: 0.4,
  3: 0.5,
  4: 0.6,
  5: 0.7,
  6: 0.8,
  7: 0.9,
});

/**
 * @constant FREE_UPGRADES_CARD - Maps Free Upgrades Card stars to value, 0 is unequipped
 */
export const FREE_UPGRADES_CARD = Object.freeze({
  0: 0,
  1: 4,
  2: 5,
  3: 6,
  4: 7,
  5: 8,
  6: 9,
  7: 10,
});

/**
 * @constant LAND_MINE_STUN_CARD - Maps Land Mine Stun Card stars to value, 0 is unequipped
 */
export const LAND_MINE_STUN_CARD = Object.freeze({
  0: 0,
  1: 1.4,
  2: 1.8,
  3: 2.2,
  4: 2.6,
  5: 3,
  6: 3.4,
  7: 3.8,
});

/**
 * @constant RECOVERY_PACKAGE_CHANCE_CARD - Maps Recovery Package Chance Card stars to value, 0 is unequipped
 */
export const RECOVERY_PACKAGE_CHANCE_CARD = Object.freeze({
  0: 0,
  1: 15,
  2: 18,
  3: 21,
  4: 24,
  5: 27,
  6: 30,
  7: 33,
});

/**
 * @constant RARE_CARDS - Maps Rare cards from their in game English names to their config objects
 */
export const RARE_CARDS = Object.freeze({
  'Intro Sprint': INTRO_SPRINT_CARD,
  'Wave Skip': WAVE_SKIP_CARD,
  'Critical Coin': CRIT_COIN_CARD,
  'Plasma Cannon': PLASMA_CANNON_CARD,
  'Extra Orb': EXTRA_ORB_CARD,
  'Free Upgrades': FREE_UPGRADES_CARD,
  'Land Mine Stun': LAND_MINE_STUN_CARD,
  'Recovery Package Chance': RECOVERY_PACKAGE_CHANCE_CARD,
});

/**
 * @constant DEATH_RAY_CARD - Maps Death Ray Card stars to value, 0 is unequipped
 */
export const DEATH_RAY_CARD = Object.freeze({
  0: 0,
  1: 2.3,
  2: 2.7,
  3: 3.1,
  4: 3.5,
  5: 3.9,
  6: 4.4,
  7: 4.9,
});

/**
 * @constant ENERGY_NET_CARD - Maps Energy Net Card stars to value, 0 is unequipped
 */
export const ENERGY_NET_CARD = Object.freeze({
  0: 0,
  1: 2.5,
  2: 2.8,
  3: 3.1,
  4: 3.4,
  5: 3.7,
  6: 4.0,
  7: 4.3,
});

/**
 * @constant SUPER_TOWER_CARD - Maps Super Tower Card stars to value, 0 is unequipped
 */
export const SUPER_TOWER_CARD = Object.freeze({
  0: 1,
  1: 2.5,
  2: 2.9,
  3: 3.3,
  4: 3.7,
  5: 4.1,
  6: 4.5,
  7: 5,
});

/**
 * @constant SECOND_WIND_CARD - Maps Second Wind Card stars to value, 0 is unequipped
 */
export const SECOND_WIND_CARD = Object.freeze({
  0: 0,
  1: 10,
  2: 15,
  3: 20,
  4: 25,
  5: 30,
  6: 35,
  7: 40,
});

/**
 * @constant DEMON_MODE_CARD - Maps Demon Mode Card stars to value, 0 is unequipped
 */
export const DEMON_MODE_CARD = Object.freeze({
  0: 0,
  1: 180,
  2: 200,
  3: 220,
  4: 240,
  5: 260,
  6: 280,
  7: 300,
});

/**
 * @constant ENERGY_SHIELD_CARD - Maps Energy Shield Card stars to value, 0 is unequipped
 */
export const ENERGY_SHIELD_CARD = Object.freeze({
  0: 0,
  1: 20,
  2: 18,
  3: 16,
  4: 14,
  5: 12,
  6: 10,
  7: 8,
});

/**
 * @constant WAVE_ACCELERATOR_CARD - Maps Wave Accelerator Card stars to value, 0 is unequipped
 */
export const WAVE_ACCELERATOR_CARD = Object.freeze({
  0: 0,
  1: 30,
  2: 34,
  3: 38,
  4: 42,
  5: 46,
  6: 50,
  7: 54,
});

/**
 * @constant BERSERKER_CARD - Maps Berserker Card stars to value, 0 is unequipped
 */
export const BERSERKER_CARD = Object.freeze({
  0: 0,
  1: 1,
  2: 1.1,
  3: 1.3,
  4: 1.3,
  5: 1.4,
  6: 1.5,
  7: 1.6,
});

/**
 * @constant ULTIMATE_CRIT_CARD - Maps Ultimate Crit Card stars to value, 0 is unequipped
 */
export const ULTIMATE_CRIT_CARD = Object.freeze({
  0: 0,
  1: 1,
  2: 1.33,
  3: 1.66,
  4: 2,
  5: 2.33,
  6: 2.66,
  7: 3,
});

/**
 * @constant EPIC_CARDS - Maps Epic cards from their in game English names to their config objects
 */
export const EPIC_CARDS = Object.freeze({
  'Death Ray': DEATH_RAY_CARD,
  'Energy Net': ENERGY_NET_CARD,
  'Super Tower': SUPER_TOWER_CARD,
  'Second Wind': SECOND_WIND_CARD,
  'Demon Mode': DEMON_MODE_CARD,
  'Energy Shield': ENERGY_SHIELD_CARD,
  'Wave Accelerator': WAVE_ACCELERATOR_CARD,
  Berserker: BERSERKER_CARD,
  'Ultimate Crit': ULTIMATE_CRIT_CARD,
});

/**
 * @constant CARDS - Maps All cards from their in game English names to their config objects
 */
export const CARDS = Object.freeze({
  ...COMMON_CARDS,
  ...RARE_CARDS,
  ...EPIC_CARDS,
});

/**
 * @constant LOCKED_CARDS - Maps Locked cards from their in game English names to the { tier, wave } milestone that they unlock
 */
export const LOCKED_CARDS = Object.freeze({
  'Land Mine Stun': Object.freeze({
    tier: 7,
    wave: 250,
  }),
  'Recovery Package Chance': Object.freeze({
    tier: 2,
    wave: 750,
  }),
  'Ultimate Crit': Object.freeze({
    tier: 14,
    wave: 50,
  }),
});
