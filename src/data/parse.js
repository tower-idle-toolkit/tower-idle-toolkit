const { readFileSync, writeFileSync } = require('fs');
// export lab.tsv from tower collection and run this to parse it into a json
// manually fix up json with any issues or add new labs as required if not in TC yet

const parseValue = val => parseInt(val.split(',').join(''), 10);
const parseTime = val => {
  const [hours, minutes, seconds] = val.split(':').map(i => parseInt(i, 10));
  return hours * 60 * 60 + minutes * 60 + seconds;
};

const lines = readFileSync('src/data/labs.tsv').toString().split('\r\n');

const labs = lines[0]
  .split('\t')
  .filter(i => i.length > 0)
  .map(lab => lab.split(' ').slice(1).join(' '));

const labMap = {};
labs.forEach(lab => {
  labMap[lab] = {};
});

for (let line = 2; line < lines.length; line += 1) {
  const cells = lines[line].split('\t');
  const level = parseValue(cells[0]);
  labs.forEach((lab, labIndex) => {
    const labDuration = cells[labIndex * 2 + 1];
    const labCost = cells[labIndex * 2 + 2];
    if (labDuration) {
      labMap[lab][level] = {
        DURATION: parseTime(labDuration),
        COST: parseValue(labCost),
      };
    }
  });
}

writeFileSync('src/data/labsTest.json', JSON.stringify(labMap, null, 2));
