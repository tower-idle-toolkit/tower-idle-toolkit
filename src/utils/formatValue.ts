/**
 * @function round - rounds a number to a specified number of places
 * @param value - any number
 * @param places - number of places to round to (0-20 inclusive)
 * @returns string - the value rounded to the nearest hundredths place
 */
export const round = (value: number, places: number) =>
  (Math.round(value * 10 ** places) / 10 ** places).toFixed(places);

/**
 * @function roundTenths - rounds a number to the tenths place
 * @param value - number to round
 * @returns string - the value rounded to the tenths place
 */
export const roundTenths = (value: number) => round(value, 1);

/**
 * @function roundHundredths - rounds a number to the hundredths place
 * @param value - number to round
 * @returns string - the value rounded to the hundredths place
 */
export const roundHundredths = (value: number) => round(value, 2);

/**
 * @function roundThousandths - rounds a number to the thousandths place
 * @param value - number to round
 * @returns string - the value rounded to the thousandths place
 */
export const roundThousandths = (value: number) => round(value, 2);

/**
 * @constant NUMBER_UNITS - All the units currently supported
 */
export const NUMBER_UNITS = [
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

/**
 * @name formatValue
 * format any raw value to get the nice display shown in game
 *
 * @param value - any raw number
 * @returns - the string value shown in game. Units up through `az` are supported; `aa` starts after `D`. After `az` it is displayed as an exponential with 2 digits.
 */
export const formatValue = (value: number) => {
  if (value < 1_000) return value.toFixed(0);
  let workingValue = value;
  for (let i = 0; i <= NUMBER_UNITS.length; i += 1) {
    const unit = NUMBER_UNITS[i];
    workingValue /= 1_000;
    if (workingValue < 1_000) return `${roundHundredths(workingValue)}${unit}`;
  }
  return value.toExponential(2);
};
