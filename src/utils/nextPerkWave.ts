/**
 * @function nextPerkWave - Computes the wave the next perk can be selected
 *
 * Takes an object with the params:
 * - `currentPerkQuantity` - number - how many perks are currently selected
 * - `waveRequirementLab` - number - the level of the wave requirement lab. If level 7, enter 7.
 * - `waveRequirementPerkValue` - number - the positive value of the % displayed on the Perk Wave Requirement perk. if -75%, enter 75. This can be obtained by `Perks[StandardPerk.PERK_WAVE_REQUIREMENT].getValue({ count, standardPerkLabLevel })`
 * @returns number - the wave you can select the next perk. It may be lower than the current wave if you just took a Perk Wave Requirement perk, as it is retroactive.
 */
export const nextPerkWave = ({
  currentPerkQuantity,
  waveRequirementLab,
  waveRequirementPerkValue,
}: {
  currentPerkQuantity: number;
  waveRequirementLab: number;
  waveRequirementPerkValue: number;
}) => {
  let currentWave = 0;
  const pwrReduction = 1 - waveRequirementPerkValue / 100;
  for (
    let currentPerk = 0;
    currentPerk <= currentPerkQuantity;
    currentPerk += 1
  ) {
    let currentPerkBase = 200 - waveRequirementLab;
    if (currentPerk > 20) currentPerkBase += 50;
    if (currentPerk > 30) currentPerkBase += 50;
    if (currentPerk > 40) currentPerkBase += 50;
    const currentPerkCost = Math.floor(currentPerkBase * pwrReduction);
    currentWave += currentPerkCost;
  }
  return currentWave;
};
