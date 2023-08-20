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
