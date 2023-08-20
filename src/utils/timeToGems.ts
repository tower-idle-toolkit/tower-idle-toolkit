export const GEM_THRESHOLDS = Object.freeze([
  1, 60, 3600, 86400, 604800, 2592000, 7776000,
]);

export const timeToGems = (seconds: number) => {
  let gems = 0;
  if (seconds > 31104000) {
    gems = 25000;
  } else if (seconds > 7776000) {
    gems = (17000 / 23328000) * (seconds - 7776000) + 8000;
  } else if (seconds > 2592000) {
    gems = (4450 / 5184000) * (seconds - 2592000) + 3550;
  } else if (seconds > 604800) {
    gems = (2550 / 1987200) * (seconds - 604800) + 1000;
  } else if (seconds > 86400) {
    gems = (837 / 518400) * (seconds - 86400) + 163;
  } else if (seconds > 3600) {
    gems = (155.5 / 82800) * (seconds - 3600) + 7.5;
  } else if (seconds > 60) {
    gems = (7.375 / 3540) * (seconds - 60) + 0.125;
  } else if (seconds > 1) {
    gems = (0.122917 / 59) * (seconds - 1) + 0.002083;
  } else {
    gems = 0;
  }

  return Math.ceil(gems);
};
