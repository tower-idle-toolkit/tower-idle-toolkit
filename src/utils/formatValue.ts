const UNITS = [
  'K',
  'M',
  'B',
  'T',
  'q',
  'Q',
  's',
  'S',
  'O',
  'N',
  'D',
  'ab',
  'ac',
  'ad',
  'ae',
  'af',
  'ag',
  'ah',
  'ai',
  'aj',
  'ak',
  'al',
  'am',
  'an',
  'ao',
  'ap',
  'aq',
  'ar',
  'as',
  'at',
  'au',
  'av',
  'aw',
  'ax',
  'ay',
  'az',
];

export const formatValue = (value: number) => {
  if (value < 1_000) return value.toFixed(0);
  let workingValue = value;
  for (let i = 0; i <= UNITS.length; i += 1) {
    const unit = UNITS[i];
    workingValue /= 1_000;
    if (workingValue < 1_000) return `${workingValue.toFixed(2)}${unit}`;
  }
  return value.toExponential(2);
};
