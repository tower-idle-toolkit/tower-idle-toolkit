export const getStats = (
  currentTier: number,
  currentWave: number,
  tournament: boolean,
) => {
  let tierDifficultyMultiplier;
  if (currentTier > 1) {
    tierDifficultyMultiplier =
      (1 + (currentTier - 1) * 15.5) *
      (1.43 ** (currentTier - 2) + 0.2 * (currentTier - 1));
  } else {
    tierDifficultyMultiplier = 1;
  }

  if (currentTier >= 5) {
    tierDifficultyMultiplier *= 1.05;
    if (currentTier >= 6) {
      tierDifficultyMultiplier *= 1.11;

      if (currentTier >= 7) {
        tierDifficultyMultiplier *= 1.2;
        if (currentTier >= 8) {
          tierDifficultyMultiplier *= 1.38;
          if (currentTier >= 9) {
            tierDifficultyMultiplier *= 1.75;
            if (currentTier >= 10) {
              tierDifficultyMultiplier *= 4.3;
              if (currentTier >= 11) {
                tierDifficultyMultiplier *= 41;
                if (currentTier >= 12) {
                  tierDifficultyMultiplier *= 410;
                  if (currentTier >= 13) {
                    tierDifficultyMultiplier *= 9000;
                    if (currentTier >= 14) {
                      tierDifficultyMultiplier *= 5000;
                      if (currentTier >= 15) {
                        tierDifficultyMultiplier *= 1000;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  // Calculate multiples of x
  const multiplesOf1024 = Math.floor(currentWave / 1024);
  const multiplesOf900 = Math.floor(currentWave / 900);
  const multiplesOf400 = Math.floor(currentWave / 400);
  const multiplesOf200 = Math.floor(currentWave / 200);
  const multiplesOf100 = Math.floor(currentWave / 100);

  // NEW ONES
  const multiplesOf107 = Math.floor(currentWave / 107);
  const multiplesOf94 = Math.floor(currentWave / 94);
  const multiplesOf83 = Math.floor(currentWave / 83);
  const multiplesOf72 = Math.floor(currentWave / 72);
  const multiplesOf60 = Math.floor(currentWave / 60);

  // NEW NEW ONES
  const multiplesOf139 = Math.floor(currentWave / 139);
  const multiplesOf182 = Math.floor(currentWave / 182);
  const multiplesOf241 = Math.floor(currentWave / 241);
  const multiplesOf332 = Math.floor(currentWave / 332);

  const multiplesOf50 = Math.floor(currentWave / 50);
  const multiplesOf30 = Math.floor(currentWave / 30);
  // const multiplesOf20 = Math.floor(currentWave / 20);

  const multiplesOf25 = Math.floor(currentWave / 25);
  const multiplesOf10 = Math.floor(currentWave / 10);
  const multiplesOf5 = Math.floor(currentWave / 5);

  let enemyHealthAdjust =
    1 +
    (0.04 * multiplesOf5 +
      0.05 * multiplesOf10 +
      0.06 * multiplesOf25 +
      0.08 * multiplesOf50 +
      0.12 * multiplesOf100 +
      0.15 * multiplesOf200 +
      0.35 * multiplesOf900 +
      0.1 * multiplesOf60 +
      0.18 * multiplesOf72 +
      0.2 * multiplesOf83 +
      0.21 * multiplesOf94 +
      0.1 * multiplesOf107); // Increase enemy health by x1.04 every 5 waves

  let enemyAttackAdjust =
    1 +
    (0.02 * multiplesOf5 +
      0.025 * multiplesOf10 +
      0.012 * multiplesOf25 +
      0.017 * multiplesOf50 +
      0.02 * multiplesOf100 +
      0.025 * multiplesOf200 +
      0.02 * multiplesOf900);

  enemyHealthAdjust *= 1.035 ** multiplesOf30;
  enemyHealthAdjust *= 1.02 ** multiplesOf60;
  enemyHealthAdjust *= 1.025 ** multiplesOf72;
  enemyHealthAdjust *= 1.03 ** multiplesOf83;
  enemyHealthAdjust *= 1.03 ** multiplesOf94;

  enemyHealthAdjust *= 1.02 ** multiplesOf100;
  enemyHealthAdjust *= 1.02 ** multiplesOf107;

  enemyHealthAdjust *= 1.03 ** multiplesOf200;
  enemyHealthAdjust *= 1.06 ** multiplesOf400;
  enemyHealthAdjust *= 1.15 ** multiplesOf900;
  enemyHealthAdjust *= 1.15 ** multiplesOf1024;

  enemyHealthAdjust *= 1.11 ** multiplesOf139;
  enemyHealthAdjust *= 1.11 ** multiplesOf182;
  enemyHealthAdjust *= 1.13 ** multiplesOf241;
  enemyHealthAdjust *= 1.13 ** multiplesOf332;

  enemyAttackAdjust *= 1.005 ** multiplesOf30;
  enemyAttackAdjust *= 1.01 ** multiplesOf72;
  enemyAttackAdjust *= 1.01 ** multiplesOf83;
  enemyAttackAdjust *= 1.01 ** multiplesOf94;
  enemyAttackAdjust *= 1.01 ** multiplesOf107;
  enemyAttackAdjust *= 1.02 ** multiplesOf200;
  enemyAttackAdjust *= 1.02 ** multiplesOf400;
  enemyAttackAdjust *= 1.035 ** multiplesOf900;
  enemyAttackAdjust *= 1.05 ** multiplesOf1024;
  if (currentTier >= 7) {
    enemyAttackAdjust *= 1.025 ** multiplesOf139;
  }
  if (currentTier >= 8) {
    enemyAttackAdjust *= 1.025 ** multiplesOf182;
  }
  enemyAttackAdjust *= 1.03 ** multiplesOf241;
  enemyAttackAdjust *= 1.03 ** multiplesOf332;

  // v0.14 - If tournament, make scaling difficulty harder

  let healthExponentialFactor;
  let damageExponentialFactor;
  if (tournament) {
    // Change difficulty if a tournament is active
    healthExponentialFactor = 2.308; // 2.261; //Was 2.221 //Was 2.245
    damageExponentialFactor = 2.105; // 2.076; //Was 2.055 //Was 2.068
  } else {
    healthExponentialFactor = 2.13;
    damageExponentialFactor = 2.007;
  }

  if (currentTier >= 10) {
    healthExponentialFactor += 0.01;
    damageExponentialFactor += 0.002;
  }
  if (currentTier >= 11) {
    healthExponentialFactor += 0.01;
    damageExponentialFactor += 0.002;
  }
  if (currentTier >= 12) {
    healthExponentialFactor += 0.08;
    damageExponentialFactor += 0.016;
  }
  if (currentTier >= 13) {
    healthExponentialFactor += 0.12;
    damageExponentialFactor += 0.025;
  }
  if (currentTier >= 14) {
    healthExponentialFactor += 0.14;
    damageExponentialFactor += 0.028;
  }
  if (currentTier >= 15) {
    healthExponentialFactor += 0.15;
    damageExponentialFactor += 0.029;
  }

  let healthMultFactor = 0.8;
  let damageMultFactor = 0.16;

  let healthPreExponentialFactor = 0.05;
  let damagePreExponentialFactor = 0.021;

  if (tournament) {
    healthMultFactor *= 7.3;
    damageMultFactor *= 7.3;
    healthPreExponentialFactor *= 9.3;
    damagePreExponentialFactor *= 9.3;
  }

  let currentWaveBaseHealth;
  let currentWaveBaseDamage;

  currentWaveBaseHealth =
    (healthPreExponentialFactor * currentWave ** healthExponentialFactor +
      healthMultFactor * currentWave +
      1.5) *
    enemyHealthAdjust;
  currentWaveBaseDamage =
    (damagePreExponentialFactor * currentWave ** damageExponentialFactor +
      damageMultFactor * currentWave +
      1.07) *
    enemyAttackAdjust;

  // Tier Adjustments
  currentWaveBaseHealth *= tierDifficultyMultiplier;
  if (currentTier < 4) {
    currentWaveBaseDamage *= tierDifficultyMultiplier * 0.94;
  } else if (currentTier < 7) {
    currentWaveBaseDamage *= tierDifficultyMultiplier * 0.9;
  } else {
    currentWaveBaseDamage *= tierDifficultyMultiplier * 0.86;
  }

  return {
    DAMAGE: Math.floor(currentWaveBaseDamage),
    HP: Math.floor(currentWaveBaseHealth),
  };
};
