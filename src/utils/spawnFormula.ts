const EB_MODIFIER = 3.56;
const NO_EB_MODIFIER = 2;

/**
 * @type Spawns - Spawns are objects containing:
 * {
 *   spawns: number; - the total spawns
 *   basic: number; - basic enemy spawns
 *   fast: number; - basic enemy spawns
 *   tank: number; - tank enemy spawns
 *   ranged: number; - ranged enemy spawns
 *   boss: number; - boss enemy spawns
 * }
 * Note that protectors are omitted, as they are semi-random and inconsistent, and also rare enough to be negligible in most use-cases.
 */
export type Spawns = {
  spawns: number;
  basic: number;
  fast: number;
  tank: number;
  ranged: number;
  boss: number;
};

/**
 * @constant SPAWN_THRESHOLDS - The thresholds when enemy stats change. This may be spawn rate changing or the spawn chance for an individual enemy type. Note again that while protectors are omitted from spawn calculations, these may still be the thresholds protector chance changes.
 */
export const SPAWN_THRESHOLDS = Object.freeze([
  0,
  1,
  3,
  6,
  20,
  40,
  60,
  80,
  100,
  150,
  160,
  200,
  250,
  300,
  320,
  400,
  600,
  750,
  800,
  1000,
  1250,
  1500,
  2000,
  2500,
  3000,
  3500,
  4000,
  4500,
  5000,
  5500,
  6000,
  6500,
  Number.POSITIVE_INFINITY,
]);

/**
 * @function waveSpawns - The predicted average spawns for the current wave, at 5 game speed and 60 fps. Note that game speed and device fps can both change this.
 *
 * @param wave - number - the wave to generate spawn data for
 * @param enemyBalance - boolean - if the enemy balance card is equipped
 * @returns Spawns - the spawn data for the current wave, in the format specified by type Spawns
 */
export const waveSpawns = (
  wave: number,
  enemyBalance: boolean,
): Readonly<Spawns> => {
  // ignores protectors
  let spawnRate: number;
  let fastRate: number;
  let tankRate: number;
  let rangedRate: number;
  if (wave >= 6500) {
    fastRate = 24;
    tankRate = 22;
    rangedRate = 21;
    spawnRate = 56;
  } else if (wave >= 6000) {
    fastRate = 24;
    tankRate = 21;
    rangedRate = 20;
    spawnRate = 54;
  } else if (wave >= 5500) {
    fastRate = 23;
    tankRate = 21;
    rangedRate = 19;
    spawnRate = 52;
  } else if (wave >= 5000) {
    fastRate = 22;
    tankRate = 20;
    rangedRate = 19;
    spawnRate = 50;
  } else if (wave >= 4500) {
    fastRate = 21;
    tankRate = 20;
    rangedRate = 19;
    spawnRate = 49;
  } else if (wave >= 4000) {
    fastRate = 21;
    tankRate = 20;
    rangedRate = 18;
    spawnRate = 48;
  } else if (wave >= 3500) {
    fastRate = 20;
    tankRate = 19;
    rangedRate = 17;
    spawnRate = 46;
  } else if (wave >= 3000) {
    fastRate = 19;
    tankRate = 19;
    rangedRate = 16;
    spawnRate = 44;
  } else if (wave >= 2500) {
    fastRate = 18;
    tankRate = 18;
    rangedRate = 15;
    spawnRate = 42;
  } else if (wave >= 2000) {
    fastRate = 17;
    tankRate = 17;
    rangedRate = 14;
    spawnRate = 40;
  } else if (wave >= 1500) {
    fastRate = 15;
    tankRate = 16;
    rangedRate = 14;
    spawnRate = 39;
  } else if (wave >= 1250) {
    fastRate = 15;
    tankRate = 16;
    rangedRate = 11;
    spawnRate = 38;
  } else if (wave >= 1000) {
    fastRate = 14;
    tankRate = 15;
    rangedRate = 11;
    spawnRate = 37;
  } else if (wave >= 800) {
    fastRate = 13;
    tankRate = 14;
    rangedRate = 11;
    spawnRate = 36;
  } else if (wave >= 750) {
    fastRate = 13;
    tankRate = 14;
    rangedRate = 10;
    spawnRate = 34;
  } else if (wave >= 600) {
    fastRate = 13;
    tankRate = 14;
    rangedRate = 10;
    spawnRate = 34;
  } else if (wave >= 400) {
    fastRate = 13;
    tankRate = 13;
    rangedRate = 9;
    spawnRate = 32;
  } else if (wave >= 320) {
    fastRate = 12;
    tankRate = 13;
    rangedRate = 8;
    spawnRate = 30;
  } else if (wave >= 300) {
    fastRate = 12;
    tankRate = 13;
    rangedRate = 8;
    spawnRate = 30;
  } else if (wave >= 250) {
    fastRate = 12;
    tankRate = 12;
    rangedRate = 7;
    spawnRate = 28;
  } else if (wave >= 200) {
    fastRate = 11;
    tankRate = 11;
    rangedRate = 7;
    spawnRate = 26;
  } else if (wave >= 160) {
    fastRate = 11;
    tankRate = 10;
    rangedRate = 6;
    spawnRate = 24;
  } else if (wave >= 150) {
    fastRate = 11;
    tankRate = 10;
    rangedRate = 6;
    spawnRate = 24;
  } else if (wave >= 100) {
    fastRate = 10;
    tankRate = 9;
    rangedRate = 6;
    spawnRate = 22;
  } else if (wave >= 80) {
    fastRate = 10;
    tankRate = 8;
    rangedRate = 5;
    spawnRate = 20;
  } else if (wave >= 60) {
    fastRate = 9;
    tankRate = 8;
    rangedRate = 4;
    spawnRate = 19;
  } else if (wave >= 40) {
    fastRate = 8;
    tankRate = 7;
    rangedRate = 3;
    spawnRate = 17;
  } else if (wave >= 20) {
    fastRate = 7;
    tankRate = 6;
    rangedRate = 2;
    spawnRate = 15;
  } else if (wave >= 6) {
    fastRate = 6;
    tankRate = 4;
    rangedRate = 1;
    spawnRate = 13;
  } else if (wave >= 3) {
    fastRate = 5;
    tankRate = 2;
    rangedRate = 0;
    spawnRate = 11;
  } else {
    fastRate = 5;
    tankRate = 0;
    rangedRate = 0;
    spawnRate = 10;
  }
  const basicRate = 100 - (fastRate + tankRate + rangedRate);
  const spawns = spawnRate * (enemyBalance ? EB_MODIFIER : NO_EB_MODIFIER);
  const isBossWave = wave % 10 === 0;
  const boss = isBossWave ? 1 : 0;
  const basic = Math.floor((basicRate * spawns) / 100 - boss);
  const fast = Math.floor((fastRate * spawns) / 100);
  const tank = Math.floor((tankRate * spawns) / 100);
  const ranged = Math.floor((rangedRate * spawns) / 100);
  const spawnData: Readonly<Spawns> = Object.freeze({
    spawns,
    basic,
    fast,
    tank,
    ranged,
    boss,
  });
  return spawnData;
};

/**
 * @function totalSpawns - Get the total spawns from wave 1 to any current wave.
 *
 * @param wave - number - the wave to sum spawns up until
 * @param enemyBalance - boolean - if the enemy balance card is equipped
 * @returns Spawns - spawn data in the format specified by type Spawns
 */
export const totalSpawns = (
  wave: number,
  enemyBalance: boolean,
): Readonly<Spawns> => {
  const total: Spawns = {
    spawns: 0,
    basic: 0,
    fast: 0,
    tank: 0,
    ranged: 0,
    boss: 0,
  };
  let previousThresholdWave = 0;
  for (let threshold = 0; threshold < SPAWN_THRESHOLDS.length; threshold += 1) {
    const thresholdWave = SPAWN_THRESHOLDS[threshold];
    const cutoffWave = Math.min(thresholdWave, wave);
    const spawnsForThreshold = waveSpawns(cutoffWave, enemyBalance);
    const wavesSincePrevious = cutoffWave - previousThresholdWave;
    total.spawns += spawnsForThreshold.spawns * wavesSincePrevious;
    total.basic += spawnsForThreshold.basic * wavesSincePrevious;
    total.fast += spawnsForThreshold.fast * wavesSincePrevious;
    total.tank += spawnsForThreshold.tank * wavesSincePrevious;
    total.ranged += spawnsForThreshold.ranged * wavesSincePrevious;
    total.boss +=
      Math.floor(cutoffWave / 10) - Math.floor(previousThresholdWave / 10);

    if (wave <= thresholdWave) return Object.freeze(total);

    previousThresholdWave = thresholdWave;
  }
  // Never reached because final threshold is infinity, but hints to typescript it wall always reutrn a value
  return Object.freeze(total);
};
