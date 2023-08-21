import { WAVE_ACCELERATOR_CARD } from 'constants/cards';

export const getRealGameSpeed = (
  displayedGameSpeed: number,
  introSprint: boolean = false,
) => {
  let realGameSpeed = 1;
  if (displayedGameSpeed <= 1) {
    realGameSpeed = introSprint ? 6.07999992371 : 1.07000005245;
  } else if (displayedGameSpeed <= 1.5) {
    realGameSpeed = introSprint ? 9.11999988556 : 1.60500001907;
  } else if (displayedGameSpeed <= 2) {
    realGameSpeed = introSprint ? 12.15999984741 : 2;
  } else if (displayedGameSpeed <= 2.5) {
    realGameSpeed = introSprint ? 15.19999980927 : 2.375;
  } else if (displayedGameSpeed <= 3) {
    realGameSpeed = introSprint ? 18.23999977112 : 2.75999999046;
  } else if (displayedGameSpeed <= 3.5) {
    realGameSpeed = introSprint ? 21.28000068665 : 3.07999992371;
  } else if (displayedGameSpeed <= 4) {
    realGameSpeed = introSprint ? 24.31999969482 : 3.3599998951;
  } else if (displayedGameSpeed <= 4.5) {
    realGameSpeed = introSprint ? 27.36000061035 : 3.69000005722;
  } else if (displayedGameSpeed <= 5) {
    realGameSpeed = introSprint ? 30.39999961853 : 4;
  } else if (displayedGameSpeed <= 5.5) {
    realGameSpeed = 4.40000009537;
  } else if (displayedGameSpeed <= 6) {
    realGameSpeed = 4.80000019073;
  } else if (displayedGameSpeed <= 6.01) {
    realGameSpeed = 4.80800008774;
  } else if (displayedGameSpeed <= 6.02) {
    realGameSpeed = 4.81599998474;
  } else if (displayedGameSpeed <= 6.03) {
    realGameSpeed = 4.82399988174;
  } else if (displayedGameSpeed <= 6.04) {
    realGameSpeed = 4.83200025558;
  } else if (displayedGameSpeed <= 6.05) {
    realGameSpeed = 4.84000015259;
  } else if (displayedGameSpeed <= 6.06) {
    realGameSpeed = 4.84800004959;
  } else if (displayedGameSpeed <= 6.07) {
    realGameSpeed = 4.85600042343;
  } else if (displayedGameSpeed <= 6.08) {
    realGameSpeed = 4.8639998436;
  } else if (displayedGameSpeed <= 6.09) {
    realGameSpeed = 4.87200021744;
  } else if (displayedGameSpeed <= 6.1) {
    realGameSpeed = 4.88000011444;
  } else if (displayedGameSpeed <= 6.11) {
    realGameSpeed = 4.88800001144;
  } else if (displayedGameSpeed <= 6.12) {
    realGameSpeed = 4.89599990845;
  } else if (displayedGameSpeed <= 6.13) {
    realGameSpeed = 4.90400028229;
  } else if (displayedGameSpeed <= 6.14) {
    realGameSpeed = 4.91200017929;
  } else if (displayedGameSpeed <= 6.15) {
    realGameSpeed = 4.92000007629;
  } else if (displayedGameSpeed <= 6.16) {
    realGameSpeed = 4.9279999733;
  } else if (displayedGameSpeed <= 6.17) {
    realGameSpeed = 4.93600034714;
  } else if (displayedGameSpeed <= 6.18) {
    realGameSpeed = 4.9439997673;
  } else if (displayedGameSpeed <= 6.19) {
    realGameSpeed = 4.95200014114;
  } else if (displayedGameSpeed <= 6.2) {
    realGameSpeed = 4.96000003815;
  } else if (displayedGameSpeed <= 6.21) {
    realGameSpeed = 4.96799993515;
  } else if (displayedGameSpeed <= 6.22) {
    realGameSpeed = 4.97600030899;
  } else if (displayedGameSpeed <= 6.23) {
    realGameSpeed = 4.98400020599;
  } else if (displayedGameSpeed <= 6.24) {
    realGameSpeed = 4.992000103;
  } else if (displayedGameSpeed <= 6.25) {
    realGameSpeed = 5;
  }
  return realGameSpeed;
};

export const WAVE_DURATION = 26;
export const NORMAL_WAVE_COOLDOWN = 8;
export const BOSS_WAVE_COOLDOWN = 12;
export const TOURNAMENT_COOLDOWN_MODIFIER = 0.5;

export const isBossWave = (wave: number) => wave % 10 === 0;

export const getWaveCooldown = (
  wave: number,
  waveAccelerator: number,
  tournament: boolean,
) => {
  const waModifier =
    1 - ((WAVE_ACCELERATOR_CARD as any)[waveAccelerator] || 0) / 100;
  const baseCooldown = isBossWave(wave)
    ? BOSS_WAVE_COOLDOWN
    : NORMAL_WAVE_COOLDOWN;
  const tournamentModifier = tournament ? TOURNAMENT_COOLDOWN_MODIFIER : 1;
  return baseCooldown * waModifier * tournamentModifier;
};

export const getInGameWaveTime = (
  wave: number,
  waveAccelerator: number,
  tournament: boolean,
) => {
  return WAVE_DURATION + getWaveCooldown(wave, waveAccelerator, tournament);
};

export const getRealWaveTime = ({
  wave,
  displayedGameSpeed,
  introSprint,
  waveAccelerator,
  tournament,
}: {
  wave: number;
  displayedGameSpeed: number;
  introSprint: boolean;
  waveAccelerator: number;
  tournament: boolean;
}) => {
  const gameSpeed = getRealGameSpeed(displayedGameSpeed, introSprint);
  const time = getInGameWaveTime(wave, waveAccelerator, tournament);
  return time / gameSpeed;
};
