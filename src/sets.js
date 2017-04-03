import fs from 'fs';
import _ from 'lodash';

const setsFileFile = 'mtg-sets-data.txt';
const allSetInfo = {};

let fileData = fs.readFileSync(setsFileFile).toString();
_.chunk(fileData.split('|'), 2).forEach(([val, key]) => key && (allSetInfo[val.replace(/\n|\r/g, '')] = key));

const getSetCode = (setName) => {
  return allSetInfo[setName];
};


export {getSetCode}