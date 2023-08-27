import workshopLevels from 'data/workshop.json';

export type WorkshopLevel = {
  value: number;
  cash: number;
  coins: number;
};
export type WorkshopUpgrade = {
  [level: string]: WorkshopLevel | undefined;
};
export type WorkshopLevels = {
  [Upgrade: string]: WorkshopUpgrade | undefined;
};

/**
 * @constant WORKSHOP_LEVELS - Every workshop level in the game.
 *
 * Format:
 * ```ts
 * {
 *   [Upgrade: string]: {
 *     [level: string]: {
 *       value: number;
 *       cash: number;
 *       coins: number;
 *     }
 *   }
 * }
 * ```
 */
export const WORKSHOP_LEVELS: WorkshopLevels = workshopLevels;

const COIN = 1;
const K = 1000 * COIN;
const M = 1000 * K;
const B = 1000 * M;
const T = 1000 * B;
const QUAD = 1000 * T;
const QUINT = 1000 * QUAD;

const upgrade = (
  name: string,
  min: number,
  max: number,
  quantity: number,
  cost: number,
) =>
  Object.freeze({
    name,
    min,
    max,
    quantity,
    cost,
  });

// Attack Tab

export const BASE_DAMAGE_MIN = 3;
export const BASE_DAMAGE_MAX = 71114385.08;
export const BASE_DAMAGE_QUANTITY = 6000;
export const BASE_DAMAGE_COST = 816.09 * T;

/**
 * @constant DAMAGE_WORKSHOP - Workshop Damage upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const DAMAGE_WORKSHOP = upgrade(
  'Damage',
  BASE_DAMAGE_MIN,
  BASE_DAMAGE_MAX,
  BASE_DAMAGE_QUANTITY,
  BASE_DAMAGE_COST,
);

export const BASE_ASPD_MIN = 1.0;
export const BASE_ASPD_MAX = 5.95;
export const BASE_ASPD_QUANTITY = 99;
export const BASE_ASPD_COST = 3.6 * M;

/**
 * @constant ASPD_WORKSHOP - Workshop Attack Speed upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const ASPD_WORKSHOP = upgrade(
  'Attack Speed',
  BASE_ASPD_MIN,
  BASE_ASPD_MAX,
  BASE_ASPD_QUANTITY,
  BASE_ASPD_COST,
);

export const BASE_CRIT_CHANCE_MIN = 1;
export const BASE_CRIT_CHANCE_MAX = 80;
export const BASE_CRIT_CHANCE_QUANTITY = 79;
export const BASE_CRIT_CHANCE_COST = 1.41 * M;

/**
 * @constant CRIT_CHANCE_WORKSHOP - Workshop Critical Chance upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const CRIT_CHANCE_WORKSHOP = upgrade(
  'Critical Chance',
  BASE_CRIT_CHANCE_MIN,
  BASE_CRIT_CHANCE_MAX,
  BASE_CRIT_CHANCE_QUANTITY,
  BASE_CRIT_CHANCE_COST,
);

export const BASE_CRIT_FACTOR_MIN = 1.2;
export const BASE_CRIT_FACTOR_MAX = 16.2;
export const BASE_CRIT_FACTOR_QUANTITY = 150;
export const BASE_CRIT_FACTOR_COST = 259.2 * B;

/**
 * @constant CRIT_FACTOR_WORKSHOP - Workshop Critical Factor upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const CRIT_FACTOR_WORKSHOP = upgrade(
  'Critical Factor',
  BASE_CRIT_FACTOR_MIN,
  BASE_CRIT_FACTOR_MAX,
  BASE_CRIT_FACTOR_QUANTITY,
  BASE_CRIT_FACTOR_COST,
);

export const BASE_RANGE_MIN = 30;
export const BASE_RANGE_MAX = 69.5;
export const BASE_RANGE_QUANTITY = 79;
export const BASE_RANGE_COST = 1.46 * M;

/**
 * @constant RANGE_WORKSHOP - Workshop Attack Range upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const RANGE_WORKSHOP = upgrade(
  'Range',
  BASE_RANGE_MIN,
  BASE_RANGE_MAX,
  BASE_RANGE_QUANTITY,
  BASE_RANGE_COST,
);

export const BASE_DPM_MIN = 0;
export const BASE_DPM_MAX = 59;
export const BASE_DPM_QUANTITY = 200;
export const BASE_DPM_COST = 316.5 * T;

/**
 * @constant DPM_WORKSHOP - Workshop Damage / Meter upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const DPM_WORKSHOP = upgrade(
  'Damage / Meter',
  BASE_DPM_MIN,
  BASE_DPM_MAX,
  BASE_DPM_QUANTITY,
  BASE_DPM_COST,
);

export const BASE_MULTISHOT_CHANCE_MIN = 0;
export const BASE_MULTISHOT_CHANCE_MAX = 49.5;
export const BASE_MULTISHOT_CHANCE_QUANTITY = 99;
export const BASE_MULTISHOT_CHANCE_COST = 4.26 * M;

/**
 * @constant MULTISHOT_CHANCE_WORKSHOP - Workshop Multishot Chance upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const MULTISHOT_CHANCE_WORKSHOP = upgrade(
  'Multishot Chance',
  BASE_MULTISHOT_CHANCE_MIN,
  BASE_MULTISHOT_CHANCE_MAX,
  BASE_MULTISHOT_CHANCE_QUANTITY,
  BASE_MULTISHOT_CHANCE_COST,
);

export const BASE_MULTISHOT_TARGETS_MIN = 2;
export const BASE_MULTISHOT_TARGETS_MAX = 9;
export const BASE_MULTISHOT_TARGETS_QUANTITY = 7;
export const BASE_MULTISHOT_TARGETS_COST = 529.95 * K;

/**
 * @constant MULTISHOT_TARGETS_WORKSHOP - Workshop Multishot Targets upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const MULTISHOT_TARGETS_WORKSHOP = upgrade(
  'Multishot Targets',
  BASE_MULTISHOT_TARGETS_MIN,
  BASE_MULTISHOT_TARGETS_MAX,
  BASE_MULTISHOT_TARGETS_QUANTITY,
  BASE_MULTISHOT_TARGETS_COST,
);

export const BASE_RAPIDFIRE_CHANCE_MIN = 0;
export const BASE_RAPIDFIRE_CHANCE_MAX = 34;
export const BASE_RAPIDFIRE_CHANCE_QUANTITY = 85;
export const BASE_RAPIDFIRE_CHANCE_COST = 3.23 * M;

/**
 * @constant RAPIDFIRE_CHANCE_WORKSHOP - Workshop Rapidfire Chance upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const RAPIDFIRE_CHANCE_WORKSHOP = upgrade(
  'Rapid Fire Chance',
  BASE_RAPIDFIRE_CHANCE_MIN,
  BASE_RAPIDFIRE_CHANCE_MAX,
  BASE_RAPIDFIRE_CHANCE_QUANTITY,
  BASE_RAPIDFIRE_CHANCE_COST,
);

export const BASE_RAPIDFIRE_DURATION_MIN = 0.6;
export const BASE_RAPIDFIRE_DURATION_MAX = 5.55;
export const BASE_RAPIDFIRE_DURATION_QUANTITY = 99;
export const BASE_RAPIDFIRE_DURATION_COST = 4.63 * M;

/**
 * @constant RAPIDFIRE_DURATION_WORKSHOP - Workshop Rapid Fire Duration upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const RAPIDFIRE_DURATION_WORKSHOP = upgrade(
  'Rapid Fire Duration',
  BASE_RAPIDFIRE_DURATION_MIN,
  BASE_RAPIDFIRE_DURATION_MAX,
  BASE_RAPIDFIRE_DURATION_QUANTITY,
  BASE_RAPIDFIRE_DURATION_COST,
);

export const BASE_BOUNCE_SHOT_CHANCE_MIN = 0;
export const BASE_BOUNCE_SHOT_CHANCE_MAX = 68;
export const BASE_BOUNCE_SHOT_CHANCE_QUANTITY = 85;
export const BASE_BOUNCE_SHOT_CHANCE_COST = 3.23 * M;

/**
 * @constant BOUNCE_SHOT_CHANCE_WORKSHOP - Workshop Bounce Shot Chance upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const BOUNCE_SHOT_CHANCE_WORKSHOP = upgrade(
  'Bounce Shot Chance',
  BASE_BOUNCE_SHOT_CHANCE_MIN,
  BASE_BOUNCE_SHOT_CHANCE_MAX,
  BASE_BOUNCE_SHOT_CHANCE_QUANTITY,
  BASE_BOUNCE_SHOT_CHANCE_COST,
);

export const BASE_BOUNCE_SHOT_TARGETS_MIN = 1;
export const BASE_BOUNCE_SHOT_TARGETS_MAX = 8;
export const BASE_BOUNCE_SHOT_TARGETS_QUANTITY = 7;
export const BASE_BOUNCE_SHOT_TARGETS_COST = 970.7 * K;

/**
 * @constant BOUNCE_SHOT_TARGETS_WORKSHOP - Workshop Bounce Shot Targets upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const BOUNCE_SHOT_TARGETS_WORKSHOP = upgrade(
  'Bounce Shot Targets',
  BASE_BOUNCE_SHOT_TARGETS_MIN,
  BASE_BOUNCE_SHOT_TARGETS_MAX,
  BASE_BOUNCE_SHOT_TARGETS_QUANTITY,
  BASE_BOUNCE_SHOT_TARGETS_COST,
);

export const BASE_BOUNCE_SHOT_RANGE_MIN = 0;
export const BASE_BOUNCE_SHOT_RANGE_MAX = 8;
export const BASE_BOUNCE_SHOT_RANGE_QUANTITY = 60;
export const BASE_BOUNCE_SHOT_RANGE_COST = 3.81 * T;

/**
 * @constant BOUNCE_SHOT_RANGE_WORKSHOP - Workshop Bounce Shot Range upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const BOUNCE_SHOT_RANGE_WORKSHOP = upgrade(
  'Bounce Shot Range',
  BASE_BOUNCE_SHOT_RANGE_MIN,
  BASE_BOUNCE_SHOT_RANGE_MAX,
  BASE_BOUNCE_SHOT_RANGE_QUANTITY,
  BASE_BOUNCE_SHOT_RANGE_COST,
);

export const BASE_SCC_MIN = 0;
export const BASE_SCC_MAX = 20;
export const BASE_SCC_QUANTITY = 100;
export const BASE_SCC_COST = 5.63 * T;

/**
 * @constant SCC_WORKSHOP - Workshop Super Crit Chance upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const SCC_WORKSHOP = upgrade(
  'Super Crit Chance',
  BASE_SCC_MIN,
  BASE_SCC_MAX,
  BASE_SCC_QUANTITY,
  BASE_SCC_COST,
);

export const BASE_SCM_MIN = 1.2;
export const BASE_SCM_MAX = 13.2;
export const BASE_SCM_QUANTITY = 120;
export const BASE_SCM_COST = 214.5 * T;

/**
 * @constant SCM_WORKSHOP - Workshop Super Crit Mult upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const SCM_WORKSHOP = upgrade(
  'Super Crit Mult',
  BASE_SCM_MIN,
  BASE_SCM_MAX,
  BASE_SCM_QUANTITY,
  BASE_SCM_COST,
);

export const BASE_REND_CHANCE_MIN = 0.1;
export const BASE_REND_CHANCE_MAX = 30;
export const BASE_REND_CHANCE_QUANTITY = 200;
export const BASE_REND_CHANCE_COST = 418.97 * QUAD;

/**
 * @constant REND_CHANCE_WORKSHOP - Workshop Rend Armor Chance upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const REND_CHANCE_WORKSHOP = upgrade(
  'Rend Armor Chance',
  BASE_REND_CHANCE_MIN,
  BASE_REND_CHANCE_MAX,
  BASE_REND_CHANCE_QUANTITY,
  BASE_REND_CHANCE_COST,
);

export const BASE_REND_MULT_MIN = 0.1;
export const BASE_REND_MULT_MAX = 30;
export const BASE_REND_MULT_QUANTITY = 299;
export const BASE_REND_MULT_COST = 15.34 * QUINT;

/**
 * @constant REND_MULT_WORKSHOP - Workshop Rend Armor Mult upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const REND_MULT_WORKSHOP = upgrade(
  'Rend Armor Mult',
  BASE_REND_MULT_MIN,
  BASE_REND_MULT_MAX,
  BASE_REND_MULT_QUANTITY,
  BASE_REND_MULT_COST,
);

/**
 * @constant BASE_REND_CAP_MAX - Rend Armor Mult Cap with no labs applied
 */
export const BASE_REND_CAP_MAX = 800;

/**
 * @constant ATTACK_UPGRADES - Workshop Attack upgrades mapping their English name to their config objects
 */
export const ATTACK_UPGRADES = Object.freeze({
  [DAMAGE_WORKSHOP.name]: DAMAGE_WORKSHOP,
  [ASPD_WORKSHOP.name]: ASPD_WORKSHOP,
  [CRIT_CHANCE_WORKSHOP.name]: CRIT_CHANCE_WORKSHOP,
  [CRIT_FACTOR_WORKSHOP.name]: CRIT_FACTOR_WORKSHOP,
  [RANGE_WORKSHOP.name]: RANGE_WORKSHOP,
  [DPM_WORKSHOP.name]: DPM_WORKSHOP,
  [MULTISHOT_CHANCE_WORKSHOP.name]: MULTISHOT_CHANCE_WORKSHOP,
  [MULTISHOT_TARGETS_WORKSHOP.name]: MULTISHOT_TARGETS_WORKSHOP,
  [RAPIDFIRE_CHANCE_WORKSHOP.name]: RAPIDFIRE_CHANCE_WORKSHOP,
  [RAPIDFIRE_DURATION_WORKSHOP.name]: RAPIDFIRE_DURATION_WORKSHOP,
  [BOUNCE_SHOT_CHANCE_WORKSHOP.name]: BOUNCE_SHOT_CHANCE_WORKSHOP,
  [BOUNCE_SHOT_TARGETS_WORKSHOP.name]: BOUNCE_SHOT_TARGETS_WORKSHOP,
  [BOUNCE_SHOT_RANGE_WORKSHOP.name]: BOUNCE_SHOT_RANGE_WORKSHOP,
  [SCC_WORKSHOP.name]: SCC_WORKSHOP,
  [SCM_WORKSHOP.name]: SCM_WORKSHOP,
  [REND_CHANCE_WORKSHOP.name]: REND_CHANCE_WORKSHOP,
  [REND_MULT_WORKSHOP.name]: REND_MULT_WORKSHOP,
});

// Defense Tab

export const BASE_HP_MIN = 1;
export const BASE_HP_MAX = 912646158.329498;
export const BASE_HP_QUANTITY = 5000;
export const BASE_HP_COST = 1.23 * T;

/**
 * @constant HP_WORKSHOP - Workshop Health upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const HP_WORKSHOP = upgrade(
  'Health',
  BASE_HP_MIN,
  BASE_HP_MAX,
  BASE_HP_QUANTITY,
  BASE_HP_COST,
);

export const BASE_REGEN_MIN = 1;
export const BASE_REGEN_MAX = 523233008.7;
export const BASE_REGEN_QUANTITY = 5000;
export const BASE_REGEN_COST = 1.23 * T;

/**
 * @constant REGEN_WORKSHOP - Workshop Health Regen upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const REGEN_WORKSHOP = upgrade(
  'Health Regen',
  BASE_REGEN_MIN,
  BASE_REGEN_MAX,
  BASE_REGEN_QUANTITY,
  BASE_REGEN_COST,
);

export const BASE_DEF_PERCENT_MIN = 0;
export const BASE_DEF_PERCENT_MAX = 49.5;
export const BASE_DEF_PERCENT_QUANTITY = 99;
export const BASE_DEF_PERCENT_COST = 2.77 * M;

/**
 * @constant DEF_PERCENT_WORKSHOP - Workshop Defense % upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const DEF_PERCENT_WORKSHOP = upgrade(
  'Defense Percent',
  BASE_DEF_PERCENT_MIN,
  BASE_DEF_PERCENT_MAX,
  BASE_DEF_PERCENT_QUANTITY,
  BASE_DEF_PERCENT_COST,
);

export const BASE_DEF_ABSOLUTE_MIN = 0;
export const BASE_DEF_ABSOLUTE_MAX = 80214388.0521576;
export const BASE_DEF_ABSOLUTE_QUANTITY = 5000;
export const BASE_DEF_ABSOLUTE_COST = 1.23 * T;

/**
 * @constant DEF_ABSOLUTE_WORKSHOP - Workshop Defense Absolute upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const DEF_ABSOLUTE_WORKSHOP = upgrade(
  'Defense Absolute',
  BASE_DEF_ABSOLUTE_MIN,
  BASE_DEF_ABSOLUTE_MAX,
  BASE_DEF_ABSOLUTE_QUANTITY,
  BASE_DEF_ABSOLUTE_COST,
);

export const BASE_THORN_DAMAGE_MIN = 0;
export const BASE_THORN_DAMAGE_MAX = 99;
export const BASE_THORN_DAMAGE_QUANTITY = 99;
export const BASE_THORN_DAMAGE_COST = 2.33 * M;

/**
 * @constant THORN_DAMAGE_WORKSHOP - Workshop Thorn Damage upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const THORN_DAMAGE_WORKSHOP = upgrade(
  'Thorns',
  BASE_THORN_DAMAGE_MIN,
  BASE_THORN_DAMAGE_MAX,
  BASE_THORN_DAMAGE_QUANTITY,
  BASE_THORN_DAMAGE_COST,
);

export const BASE_LIFESTEAL_MIN = 0;
export const BASE_LIFESTEAL_MAX = 4.46;
export const BASE_LIFESTEAL_QUANTITY = 80;
export const BASE_LIFESTEAL_COST = 1.48 * M;

/**
 * @constant LIFESTEAL_WORKSHOP - Workshop Lifesteal upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const LIFESTEAL_WORKSHOP = upgrade(
  'Lifesteal',
  BASE_LIFESTEAL_MIN,
  BASE_LIFESTEAL_MAX,
  BASE_LIFESTEAL_QUANTITY,
  BASE_LIFESTEAL_COST,
);

export const BASE_KNOCKBACK_CHANCE_MIN = 0;
export const BASE_KNOCKBACK_CHANCE_MAX = 80;
export const BASE_KNOCKBACK_CHANCE_QUANTITY = 80;
export const BASE_KNOCKBACK_CHANCE_COST = 1.6 * M;

/**
 * @constant KNOCKBACK_CHANCE_WORKSHOP - Workshop Knockback Chance upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const KNOCKBACK_CHANCE_WORKSHOP = upgrade(
  'Knockback Chance',
  BASE_KNOCKBACK_CHANCE_MIN,
  BASE_KNOCKBACK_CHANCE_MAX,
  BASE_KNOCKBACK_CHANCE_QUANTITY,
  BASE_KNOCKBACK_CHANCE_COST,
);

export const BASE_KNOCKBACK_FORCE_MIN = 0.4;
export const BASE_KNOCKBACK_FORCE_MAX = 6.08;
export const BASE_KNOCKBACK_FORCE_QUANTITY = 40;
export const BASE_KNOCKBACK_FORCE_COST = 184.33 * K;

/**
 * @constant KNOCKBACK_FORCE_WORKSHOP - Workshop Knockback Force upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const KNOCKBACK_FORCE_WORKSHOP = upgrade(
  'Knockback Force',
  BASE_KNOCKBACK_FORCE_MIN,
  BASE_KNOCKBACK_FORCE_MAX,
  BASE_KNOCKBACK_FORCE_QUANTITY,
  BASE_KNOCKBACK_FORCE_COST,
);

export const BASE_ORB_SPEED_MIN = 0.4;
export const BASE_ORB_SPEED_MAX = 6.1;
export const BASE_ORB_SPEED_QUANTITY = 38;
export const BASE_ORB_SPEED_COST = 342.98 * K;

/**
 * @constant ORB_SPEED_WORKSHOP - Workshop Orb Speed upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const ORB_SPEED_WORKSHOP = upgrade(
  'Orb Speed',
  BASE_ORB_SPEED_MIN,
  BASE_ORB_SPEED_MAX,
  BASE_ORB_SPEED_QUANTITY,
  BASE_ORB_SPEED_COST,
);

export const BASE_ORB_QUANTITY_MIN = 0;
export const BASE_ORB_QUANTITY_MAX = 4;
export const BASE_ORB_QUANTITY_QUANTITY = 4;
export const BASE_ORB_QUANTITY_COST = 493.0 * K;

/**
 * @constant ORB_QUANTITY_WORKSHOP - Workshop Orb Quantity upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const ORB_QUANTITY_WORKSHOP = upgrade(
  'Orbs',
  BASE_ORB_QUANTITY_MIN,
  BASE_ORB_QUANTITY_MAX,
  BASE_ORB_QUANTITY_QUANTITY,
  BASE_ORB_QUANTITY_COST,
);

/**
 * @constant WORKSHOP_ORB_DISTANCE - How far away workshop orbs supposedly rotate, in "meters"
 */
export const WORKSHOP_ORB_DISTANCE = 75;

export const BASE_SHOCKWAVE_SIZE_MIN = 0.6;
export const BASE_SHOCKWAVE_SIZE_MAX = 2.35;
export const BASE_SHOCKWAVE_SIZE_QUANTITY = 35;
export const BASE_SHOCKWAVE_SIZE_COST = 600.13 * K;

/**
 * @constant SHOCKWAVE_SIZE_WORKSHOP - Workshop Shockwave Size upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const SHOCKWAVE_SIZE_WORKSHOP = upgrade(
  'Shockwave Size',
  BASE_SHOCKWAVE_SIZE_MIN,
  BASE_SHOCKWAVE_SIZE_MAX,
  BASE_SHOCKWAVE_SIZE_QUANTITY,
  BASE_SHOCKWAVE_SIZE_COST,
);

export const BASE_SHOCKWAVE_FREQUENCY_MIN = 20;
export const BASE_SHOCKWAVE_FREQUENCY_MAX = 14;
export const BASE_SHOCKWAVE_FREQUENCY_QUANTITY = 40;
export const BASE_SHOCKWAVE_FREQUENCY_COST = 973.74 * K;

/**
 * @constant SHOCKWAVE_FREQUENCY_WORKSHOP - Workshop Shockwave Frequency upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const SHOCKWAVE_FREQUENCY_WORKSHOP = upgrade(
  'Shockwave Frequency',
  BASE_SHOCKWAVE_FREQUENCY_MIN,
  BASE_SHOCKWAVE_FREQUENCY_MAX,
  BASE_SHOCKWAVE_FREQUENCY_QUANTITY,
  BASE_SHOCKWAVE_FREQUENCY_COST,
);

export const BASE_LAND_MINE_CHANCE_MIN = 0;
export const BASE_LAND_MINE_CHANCE_MAX = 30;
export const BASE_LAND_MINE_CHANCE_QUANTITY = 50;
export const BASE_LAND_MINE_CHANCE_COST = 15.46 * M;

/**
 * @constant LAND_MINE_CHANCE_WORKSHOP - Workshop Land Mine Chance upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const LAND_MINE_CHANCE_WORKSHOP = upgrade(
  'Land Mine Chance',
  BASE_LAND_MINE_CHANCE_MIN,
  BASE_LAND_MINE_CHANCE_MAX,
  BASE_LAND_MINE_CHANCE_QUANTITY,
  BASE_LAND_MINE_CHANCE_COST,
);

export const BASE_LAND_MINE_DAMAGE_MIN = 100;
export const BASE_LAND_MINE_DAMAGE_MAX = 2100;
export const BASE_LAND_MINE_DAMAGE_QUANTITY = 200;
export const BASE_LAND_MINE_DAMAGE_COST = 2.45 * QUAD;

/**
 * @constant LAND_MINE_DAMAGE_WORKSHOP - Workshop Land Mine Damage upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const LAND_MINE_DAMAGE_WORKSHOP = upgrade(
  'Land Mine Damage',
  BASE_LAND_MINE_DAMAGE_MIN,
  BASE_LAND_MINE_DAMAGE_MAX,
  BASE_LAND_MINE_DAMAGE_QUANTITY,
  BASE_LAND_MINE_DAMAGE_COST,
);

export const BASE_LAND_MINE_RADIUS_MIN = 0.5;
export const BASE_LAND_MINE_RADIUS_MAX = 1.5;
export const BASE_LAND_MINE_RADIUS_QUANTITY = 50;
export const BASE_LAND_MINE_RADIUS_COST = 77.52 * B;

/**
 * @constant LAND_MINE_RADIUS_WORKSHOP - Workshop Land Mine Radius upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const LAND_MINE_RADIUS_WORKSHOP = upgrade(
  'Land Mine Radius',
  BASE_LAND_MINE_RADIUS_MIN,
  BASE_LAND_MINE_RADIUS_MAX,
  BASE_LAND_MINE_RADIUS_QUANTITY,
  BASE_LAND_MINE_RADIUS_COST,
);

export const BASE_DEATH_DEFY_MIN = 0;
export const BASE_DEATH_DEFY_MAX = 30;
export const BASE_DEATH_DEFY_QUANTITY = 75;
export const BASE_DEATH_DEFY_COST = 1.72 * B;

/**
 * @constant DEATH_DEFY_WORKSHOP -  Workshop Death Defy upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const DEATH_DEFY_WORKSHOP = upgrade(
  'Death Defy',
  BASE_DEATH_DEFY_MIN,
  BASE_DEATH_DEFY_MAX,
  BASE_DEATH_DEFY_QUANTITY,
  BASE_DEATH_DEFY_COST,
);

export const BASE_WALL_HEALTH_MIN = 20;
export const BASE_WALL_HEALTH_MAX = 200;
export const BASE_WALL_HEALTH_QUANTITY = 1800;
export const BASE_WALL_HEALTH_COST = 14.59 * QUAD;

/**
 * @constant WALL_HEALTH_WORKSHOP - Workshop Wall Health upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const WALL_HEALTH_WORKSHOP = upgrade(
  'Wall Health',
  BASE_WALL_HEALTH_MIN,
  BASE_WALL_HEALTH_MAX,
  BASE_WALL_HEALTH_QUANTITY,
  BASE_WALL_HEALTH_COST,
);

export const BASE_WALL_REBUILD_MIN = 1200;
export const BASE_WALL_REBUILD_MAX = 600;
export const BASE_WALL_REBUILD_QUANTITY = 300;
export const BASE_WALL_REBUILD_COST = 40.37 * T;

/**
 * @constant WALL_REBUILD_WORKSHOP - Workshop Wall Rebuild upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const WALL_REBUILD_WORKSHOP = upgrade(
  'Wall Rebuild',
  BASE_WALL_REBUILD_MIN,
  BASE_WALL_REBUILD_MAX,
  BASE_WALL_REBUILD_QUANTITY,
  BASE_WALL_REBUILD_COST,
);

/**
 * @constant DEFENSE_UPGRADES -  Workshop Defense upgrades mapping their English name to their config objects
 */
export const DEFENSE_UPGRADES = Object.freeze({
  [HP_WORKSHOP.name]: HP_WORKSHOP,
  [REGEN_WORKSHOP.name]: REGEN_WORKSHOP,
  [DEF_PERCENT_WORKSHOP.name]: DEF_PERCENT_WORKSHOP,
  [DEF_ABSOLUTE_WORKSHOP.name]: DEF_ABSOLUTE_WORKSHOP,
  [THORN_DAMAGE_WORKSHOP.name]: THORN_DAMAGE_WORKSHOP,
  [LIFESTEAL_WORKSHOP.name]: LIFESTEAL_WORKSHOP,
  [KNOCKBACK_CHANCE_WORKSHOP.name]: KNOCKBACK_CHANCE_WORKSHOP,
  [KNOCKBACK_FORCE_WORKSHOP.name]: KNOCKBACK_FORCE_WORKSHOP,
  [ORB_SPEED_WORKSHOP.name]: ORB_SPEED_WORKSHOP,
  [ORB_QUANTITY_WORKSHOP.name]: ORB_QUANTITY_WORKSHOP,
  [SHOCKWAVE_SIZE_WORKSHOP.name]: SHOCKWAVE_SIZE_WORKSHOP,
  [SHOCKWAVE_FREQUENCY_WORKSHOP.name]: SHOCKWAVE_FREQUENCY_WORKSHOP,
  [LAND_MINE_CHANCE_WORKSHOP.name]: LAND_MINE_CHANCE_WORKSHOP,
  [LAND_MINE_DAMAGE_WORKSHOP.name]: LAND_MINE_DAMAGE_WORKSHOP,
  [LAND_MINE_RADIUS_WORKSHOP.name]: LAND_MINE_RADIUS_WORKSHOP,
  [DEATH_DEFY_WORKSHOP.name]: DEATH_DEFY_WORKSHOP,
  [WALL_HEALTH_WORKSHOP.name]: WALL_HEALTH_WORKSHOP,
  [WALL_REBUILD_WORKSHOP.name]: WALL_REBUILD_WORKSHOP,
});

// Utility Tab

export const BASE_CASH_BONUS_MIN = 1;
export const BASE_CASH_BONUS_MAX = 2.49;
export const BASE_CASH_BONUS_QUANTITY = 149;
export const BASE_CASH_BONUS_COST = 14.82 * M;

/**
 * @constant CASH_BONUS_WORKSHOP - Workshop Cash Bonus upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const CASH_BONUS_WORKSHOP = upgrade(
  'Cash Bonus',
  BASE_CASH_BONUS_MIN,
  BASE_CASH_BONUS_MAX,
  BASE_CASH_BONUS_QUANTITY,
  BASE_CASH_BONUS_COST,
);

export const BASE_CASH_PER_WAVE_MIN = 0;
export const BASE_CASH_PER_WAVE_MAX = 596;
export const BASE_CASH_PER_WAVE_QUANTITY = 149;
export const BASE_CASH_PER_WAVE_COST = 14.82 * M;

/**
 * @constant CASH_PER_WAVE_WORKSHOP - Workshop Cash / Wave upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const CASH_PER_WAVE_WORKSHOP = upgrade(
  'Cash / Wave',
  BASE_CASH_PER_WAVE_MIN,
  BASE_CASH_PER_WAVE_MAX,
  BASE_CASH_PER_WAVE_QUANTITY,
  BASE_CASH_PER_WAVE_COST,
);

export const BASE_COINS_PER_KILL_MIN = 1;
export const BASE_COINS_PER_KILL_MAX = 2.49;
export const BASE_COINS_PER_KILL_QUANTITY = 149;
export const BASE_COINS_PER_KILL_COST = 19.47 * M;

/**
 * @constant COINS_PER_KILL_WORKSHOP - Workshop Coins / Kill upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const COINS_PER_KILL_WORKSHOP = upgrade(
  'Coins / Kill Bonus',
  BASE_COINS_PER_KILL_MIN,
  BASE_COINS_PER_KILL_MAX,
  BASE_COINS_PER_KILL_QUANTITY,
  BASE_COINS_PER_KILL_COST,
);

export const BASE_COINS_PER_WAVE_MIN = 1;
export const BASE_COINS_PER_WAVE_MAX = 150;
export const BASE_COINS_PER_WAVE_QUANTITY = 149;
export const BASE_COINS_PER_WAVE_COST = 19.47 * M;

/**
 * @constant COINS_PER_WAVE_WORKSHOP - Workshop Coins / Wave upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const COINS_PER_WAVE_WORKSHOP = upgrade(
  'Coins / Wave',
  BASE_COINS_PER_WAVE_MIN,
  BASE_COINS_PER_WAVE_MAX,
  BASE_COINS_PER_WAVE_QUANTITY,
  BASE_COINS_PER_WAVE_COST,
);

export const BASE_FREE_ATTACK_UPGRADE_MIN = 0;
export const BASE_FREE_ATTACK_UPGRADE_MAX = 49.5;
export const BASE_FREE_ATTACK_UPGRADE_QUANTITY = 99;
export const BASE_FREE_ATTACK_UPGRADE_COST = 4.05 * M;

/**
 * @constant FREE_ATTACK_UPGRADE_WORKSHOP - Workshop Free Attack Upgrade upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const FREE_ATTACK_UPGRADE_WORKSHOP = upgrade(
  'Free Attack Upgrade',
  BASE_FREE_ATTACK_UPGRADE_MIN,
  BASE_FREE_ATTACK_UPGRADE_MAX,
  BASE_FREE_ATTACK_UPGRADE_QUANTITY,
  BASE_FREE_ATTACK_UPGRADE_COST,
);

export const BASE_FREE_DEFENSE_UPGRADE_MIN = 0;
export const BASE_FREE_DEFENSE_UPGRADE_MAX = 49.5;
export const BASE_FREE_DEFENSE_UPGRADE_QUANTITY = 99;
export const BASE_FREE_DEFENSE_UPGRADE_COST = 4.05 * M;

/**
 * @constant FREE_DEFENSE_UPGRADE_WORKSHOP - Workshop Free Defense Upgrade upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const FREE_DEFENSE_UPGRADE_WORKSHOP = upgrade(
  'Free Defense Upgrade',
  BASE_FREE_DEFENSE_UPGRADE_MIN,
  BASE_FREE_DEFENSE_UPGRADE_MAX,
  BASE_FREE_DEFENSE_UPGRADE_QUANTITY,
  BASE_FREE_DEFENSE_UPGRADE_COST,
);

export const BASE_FREE_UTILITY_UPGRADE_MIN = 0;
export const BASE_FREE_UTILITY_UPGRADE_MAX = 49.5;
export const BASE_FREE_UTILITY_UPGRADE_QUANTITY = 99;
export const BASE_FREE_UTILITY_UPGRADE_COST = 4.05 * M;

/**
 * @constant FREE_UTILITY_UPGRADE_WORKSHOP - Workshop Free Utility Upgrade upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const FREE_UTILITY_UPGRADE_WORKSHOP = upgrade(
  'Free Utility Upgrade',
  BASE_FREE_UTILITY_UPGRADE_MIN,
  BASE_FREE_UTILITY_UPGRADE_MAX,
  BASE_FREE_UTILITY_UPGRADE_QUANTITY,
  BASE_FREE_UTILITY_UPGRADE_COST,
);

export const BASE_INTEREST_MIN = 0;
export const BASE_INTEREST_MAX = 5.94;
export const BASE_INTEREST_QUANTITY = 99;
export const BASE_INTEREST_COST = 7.36 * M;

/**
 * @constant INTEREST_WORKSHOP - Workshop Interest / Wave upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const INTEREST_WORKSHOP = upgrade(
  'Interest / Wave',
  BASE_INTEREST_MIN,
  BASE_INTEREST_MAX,
  BASE_INTEREST_QUANTITY,
  BASE_INTEREST_COST,
);

export const BASE_RECOVERY_PACKAGE_AMOUNT_MIN = 14;
export const BASE_RECOVERY_PACKAGE_AMOUNT_MAX = 38;
export const BASE_RECOVERY_PACKAGE_AMOUNT_QUANTITY = 60;
export const BASE_RECOVERY_PACKAGE_AMOUNT_COST = 321.28 * M;

/**
 * @constant RECOVERY_PACKAGE_AMOUNT_WORKSHOP - Workshop Recovery Amount upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const RECOVERY_PACKAGE_AMOUNT_WORKSHOP = upgrade(
  'Recovery Amount',
  BASE_RECOVERY_PACKAGE_AMOUNT_MIN,
  BASE_RECOVERY_PACKAGE_AMOUNT_MAX,
  BASE_RECOVERY_PACKAGE_AMOUNT_QUANTITY,
  BASE_RECOVERY_PACKAGE_AMOUNT_COST,
);

export const BASE_RECOVERY_PACKAGE_MAX_MIN = 1.5;
export const BASE_RECOVERY_PACKAGE_MAX_MAX = 3;
export const BASE_RECOVERY_PACKAGE_MAX_QUANTITY = 50;
export const BASE_RECOVERY_PACKAGE_MAX_COST = 130.57 * M;

/**
 * @constant RECOVERY_PACKAGE_MAX_WORKSHOP - Workshop Max Recovery upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const RECOVERY_PACKAGE_MAX_WORKSHOP = upgrade(
  'Max Recovery',
  BASE_RECOVERY_PACKAGE_MAX_MIN,
  BASE_RECOVERY_PACKAGE_MAX_MAX,
  BASE_RECOVERY_PACKAGE_MAX_QUANTITY,
  BASE_RECOVERY_PACKAGE_MAX_COST,
);

export const BASE_RECOVERY_PACKAGE_CHANCE_MIN = 6;
export const BASE_RECOVERY_PACKAGE_CHANCE_MAX = 30;
export const BASE_RECOVERY_PACKAGE_CHANCE_QUANTITY = 60;
export const BASE_RECOVERY_PACKAGE_CHANCE_COST = 321.28 * M;

/**
 * @constant RECOVERY_PACKAGE_CHANCE_WORKSHOP - Workshop Package Chance upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const RECOVERY_PACKAGE_CHANCE_WORKSHOP = upgrade(
  'Package Chance',
  BASE_RECOVERY_PACKAGE_CHANCE_MIN,
  BASE_RECOVERY_PACKAGE_CHANCE_MAX,
  BASE_RECOVERY_PACKAGE_CHANCE_QUANTITY,
  BASE_RECOVERY_PACKAGE_CHANCE_COST,
);

export const BASE_ENEMY_ATTACK_LEVEL_SKIP_MIN = 0.05;
export const BASE_ENEMY_ATTACK_LEVEL_SKIP_MAX = 35;
export const BASE_ENEMY_ATTACK_LEVEL_SKIP_QUANTITY = 699;
export const BASE_ENEMY_ATTACK_LEVEL_SKIP_COST = 123.43 * QUINT;

/**
 * @constant ENEMY_ATTACK_LEVEL_SKIP_WORKSHOP - Workshop Enemy Attack Level Skip upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const ENEMY_ATTACK_LEVEL_SKIP_WORKSHOP = upgrade(
  'Enemy Attack Level Skip',
  BASE_ENEMY_ATTACK_LEVEL_SKIP_MIN,
  BASE_ENEMY_ATTACK_LEVEL_SKIP_MAX,
  BASE_ENEMY_ATTACK_LEVEL_SKIP_QUANTITY,
  BASE_ENEMY_ATTACK_LEVEL_SKIP_COST,
);

export const BASE_ENEMY_HEALTH_LEVEL_SKIP_MIN = 0.05;
export const BASE_ENEMY_HEALTH_LEVEL_SKIP_MAX = 35;
export const BASE_ENEMY_HEALTH_LEVEL_SKIP_QUANTITY = 699;
export const BASE_ENEMY_HEALTH_LEVEL_SKIP_COST = 123.43 * QUINT;

/**
 * @constant ENEMY_HEALTH_LEVEL_SKIP_WORKSHOP - Workshop Enemy Health Level Skip upgrade { name, min, max, quantity, and cost } with no modifiers or discounts
 */
export const ENEMY_HEALTH_LEVEL_SKIP_WORKSHOP = upgrade(
  'Enemy Health Level Skip',
  BASE_ENEMY_HEALTH_LEVEL_SKIP_MIN,
  BASE_ENEMY_HEALTH_LEVEL_SKIP_MAX,
  BASE_ENEMY_HEALTH_LEVEL_SKIP_QUANTITY,
  BASE_ENEMY_HEALTH_LEVEL_SKIP_COST,
);

/**
 * @constant UTILITY_UPGRADES - Workshop Utility upgrades mapping their English name to their config objects
 */
export const UTILITY_UPGRADES = Object.freeze({
  [CASH_BONUS_WORKSHOP.name]: CASH_BONUS_WORKSHOP,
  [CASH_PER_WAVE_WORKSHOP.name]: CASH_PER_WAVE_WORKSHOP,
  [COINS_PER_KILL_WORKSHOP.name]: COINS_PER_KILL_WORKSHOP,
  [COINS_PER_WAVE_WORKSHOP.name]: COINS_PER_WAVE_WORKSHOP,
  [FREE_ATTACK_UPGRADE_WORKSHOP.name]: FREE_ATTACK_UPGRADE_WORKSHOP,
  [FREE_DEFENSE_UPGRADE_WORKSHOP.name]: FREE_DEFENSE_UPGRADE_WORKSHOP,
  [FREE_UTILITY_UPGRADE_WORKSHOP.name]: FREE_UTILITY_UPGRADE_WORKSHOP,
  [INTEREST_WORKSHOP.name]: INTEREST_WORKSHOP,
  [RECOVERY_PACKAGE_AMOUNT_WORKSHOP.name]: RECOVERY_PACKAGE_AMOUNT_WORKSHOP,
  [RECOVERY_PACKAGE_MAX_WORKSHOP.name]: RECOVERY_PACKAGE_MAX_WORKSHOP,
  [RECOVERY_PACKAGE_CHANCE_WORKSHOP.name]: RECOVERY_PACKAGE_CHANCE_WORKSHOP,
  [ENEMY_ATTACK_LEVEL_SKIP_WORKSHOP.name]: ENEMY_ATTACK_LEVEL_SKIP_WORKSHOP,
  [ENEMY_HEALTH_LEVEL_SKIP_WORKSHOP.name]: ENEMY_HEALTH_LEVEL_SKIP_WORKSHOP,
});

/**
 * @constant WORKSHOP_UPGRADES - All Workshop upgrades mapping their English name to their config objects
 */
export const WORKSHOP_UPGRADES = Object.freeze({
  ...ATTACK_UPGRADES,
  ...DEFENSE_UPGRADES,
  ...UTILITY_UPGRADES,
});

/**
 * @constant ATTACK_UNLOCKS - An array of { name: string, cost: number, upgrades: string[] } of workshop unlocks
 *  - The first entry is Default, the ones already unlocked on a fresh respec
 */
export const ATTACK_UNLOCKS = Object.freeze([
  Object.freeze({
    name: 'Default',
    cost: 0,
    upgrades: Object.freeze([DAMAGE_WORKSHOP.name, ASPD_WORKSHOP.name]),
  }),
  Object.freeze({
    name: 'Range Upgrades',
    cost: 50,
    upgrades: Object.freeze([RANGE_WORKSHOP.name, DPM_WORKSHOP.name]),
  }),
  Object.freeze({
    name: 'Multishot Upgrades',
    cost: 400,
    upgrades: Object.freeze([
      MULTISHOT_CHANCE_WORKSHOP.name,
      MULTISHOT_TARGETS_WORKSHOP.name,
    ]),
  }),
  Object.freeze({
    name: 'Rapid Fire Upgrades',
    cost: 1500,
    upgrades: Object.freeze([
      RAPIDFIRE_CHANCE_WORKSHOP.name,
      RAPIDFIRE_DURATION_WORKSHOP.name,
    ]),
  }),
  Object.freeze({
    name: 'Bounce Shot Upgrades',
    cost: 10 * K,
    upgrades: Object.freeze([
      BOUNCE_SHOT_CHANCE_WORKSHOP.name,
      BOUNCE_SHOT_TARGETS_WORKSHOP.name,
      BOUNCE_SHOT_RANGE_WORKSHOP.name,
    ]),
  }),
  Object.freeze({
    name: 'Super Critical Hits',
    cost: 100 * M,
    upgrades: Object.freeze([SCC_WORKSHOP.name, SCM_WORKSHOP.name]),
  }),
  Object.freeze({
    name: 'Rend Armor',
    cost: 500 * B,
    upgrades: Object.freeze([
      REND_CHANCE_WORKSHOP.name,
      REND_MULT_WORKSHOP.name,
    ]),
  }),
]);

/**
 * @constant DEFENSE_UNLOCKS - An array of { name: string, cost: number, upgrades: string[] } of workshop unlocks
 *  - The first entry is Default, the ones already unlocked on a fresh respec
 */
export const DEFENSE_UNLOCKS = Object.freeze([
  Object.freeze({
    name: 'Default',
    cost: 0,
    upgrades: Object.freeze([HP_WORKSHOP.name, REGEN_WORKSHOP.name]),
  }),
  Object.freeze({
    name: 'Defense Upgrades',
    cost: 75,
    upgrades: Object.freeze([
      DEF_PERCENT_WORKSHOP.name,
      DEF_ABSOLUTE_WORKSHOP.name,
    ]),
  }),
  Object.freeze({
    name: 'Thorn Upgrades',
    cost: 500,
    upgrades: Object.freeze([THORN_DAMAGE_WORKSHOP.name]),
  }),
  Object.freeze({
    name: 'Lifesteal Upgrades',
    cost: 2 * K,
    upgrades: Object.freeze([LIFESTEAL_WORKSHOP.name]),
  }),
  Object.freeze({
    name: 'Knockback Upgrades',
    cost: 5 * K,
    upgrades: Object.freeze([
      KNOCKBACK_CHANCE_WORKSHOP.name,
      KNOCKBACK_FORCE_WORKSHOP.name,
    ]),
  }),
  Object.freeze({
    name: 'Orbs Upgrades',
    cost: 15 * K,
    upgrades: Object.freeze([
      ORB_SPEED_WORKSHOP.name,
      ORB_QUANTITY_WORKSHOP.name,
    ]),
  }),
  Object.freeze({
    name: 'Shockwave Upgrades',
    cost: 100 * K,
    upgrades: Object.freeze([
      SHOCKWAVE_SIZE_WORKSHOP.name,
      SHOCKWAVE_FREQUENCY_WORKSHOP.name,
    ]),
  }),
  Object.freeze({
    name: 'Land Mine Upgrades',
    cost: 400 * K,
    upgrades: Object.freeze([
      LAND_MINE_DAMAGE_WORKSHOP.name,
      LAND_MINE_CHANCE_WORKSHOP.name,
      LAND_MINE_RADIUS_WORKSHOP.name,
    ]),
  }),
  Object.freeze({
    name: 'Death Defy',
    cost: 1.5 * M,
    upgrades: Object.freeze([DEATH_DEFY_WORKSHOP.name]),
  }),
  Object.freeze({
    name: 'The Wall',
    cost: 500 * M,
    upgrades: Object.freeze([
      WALL_HEALTH_WORKSHOP.name,
      WALL_REBUILD_WORKSHOP.name,
    ]),
  }),
]);

/**
 * @constant UTILITY_UNLOCKS - An array of { name: string, cost: number, upgrades: string[] } of workshop unlocks
 *  - The first entry is Default, the ones already unlocked on a fresh respec
 */
export const UTILITY_UNLOCKS = Object.freeze([
  Object.freeze({
    name: 'Default',
    cost: 0,
    upgrades: Object.freeze([]),
  }),
  Object.freeze({
    name: 'Cash Bonuses',
    cost: 40,
    upgrades: Object.freeze([
      CASH_BONUS_WORKSHOP.name,
      CASH_PER_WAVE_WORKSHOP.name,
    ]),
  }),
  Object.freeze({
    name: 'Coin Bonuses',
    cost: 100,
    upgrades: Object.freeze([
      COINS_PER_KILL_WORKSHOP.name,
      COINS_PER_WAVE_WORKSHOP.name,
    ]),
  }),
  Object.freeze({
    name: 'Upgrade Chances',
    cost: 800,
    upgrades: Object.freeze([
      FREE_ATTACK_UPGRADE_WORKSHOP.name,
      FREE_DEFENSE_UPGRADE_WORKSHOP.name,
      FREE_UTILITY_UPGRADE_WORKSHOP.name,
    ]),
  }),
  Object.freeze({
    name: 'Interest / Wave',
    cost: 5 * K,
    upgrades: Object.freeze([INTEREST_WORKSHOP.name]),
  }),
  Object.freeze({
    name: 'Recovery Package',
    cost: 1.5 * M,
    upgrades: Object.freeze([
      RECOVERY_PACKAGE_AMOUNT_WORKSHOP.name,
      RECOVERY_PACKAGE_MAX_WORKSHOP.name,
      RECOVERY_PACKAGE_CHANCE_WORKSHOP.name,
    ]),
  }),
  Object.freeze({
    name: 'Enemy Level Skips',
    cost: 1 * B,
    upgrades: Object.freeze([
      ENEMY_ATTACK_LEVEL_SKIP_WORKSHOP.name,
      ENEMY_HEALTH_LEVEL_SKIP_WORKSHOP.name,
    ]),
  }),
]);

/**
 * @constant WORKSHOP_UNLOCKS - an object mapping Attack, Defense, and Utility to their respective unlocks
 */
export const WORKSHOP_UNLOCKS = Object.freeze({
  Attack: ATTACK_UNLOCKS,
  Defense: DEFENSE_UNLOCKS,
  Utility: UTILITY_UNLOCKS,
});

/**
 * @function maxWorkshopLevel - gets the max level of a workshop
 *
 * @param name - The name of the upgrade
 * @returns The max level of the upgrade
 */
export const maxWorkshopLevel = (name: string) => {
  const levels = Object.keys(WORKSHOP_LEVELS[name] || {});
  return parseInt(levels.at(-1) || '0', 10);
};
