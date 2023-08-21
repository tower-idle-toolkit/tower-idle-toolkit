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
  const nextPerk = currentPerkQuantity + 1;
  let wave = nextPerk * 200;
  wave -= waveRequirementLab * nextPerk;
  if (nextPerk > 20) {
    // 21+ are an additional 50 waves
    wave += 50 * (nextPerk - 20);
  }
  if (nextPerk > 30) {
    // 31+ are another additional 50 waves
    wave += 50 * (nextPerk - 30);
  }
  if (nextPerk > 40) {
    // 41+ are another additional 50 waves
    wave += 50 * (nextPerk - 40);
  }
  const pwrReduction = 1 - waveRequirementPerkValue / 100;
  return wave * pwrReduction;
};
