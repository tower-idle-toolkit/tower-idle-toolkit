const { readFileSync, writeFileSync } = require('fs');

const labJson = JSON.parse(readFileSync('src/data/rawLabs.json'));

const filtered = Object.freeze(
  Object.entries(labJson).reduce((labMap, [name, lab]) => {
    // eslint-disable-next-line no-param-reassign
    labMap[name] = Object.freeze(
      Object.keys(lab)
        .filter(
          level =>
            lab[level].DURATION !== null && lab[level].DURATION !== undefined,
        )
        .reduce((current, level) => {
          // eslint-disable-next-line no-param-reassign
          current[parseInt(level, 10)] = Object.freeze(lab[level]);
          return current;
        }, {}),
    );
    return labMap;
  }, {}),
);

writeFileSync('src/data/filteredLabs.json', JSON.stringify(filtered, null, 2));
