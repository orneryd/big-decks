import path from 'path';
import _ from 'lodash';
import fs from 'fs';

import {toDeckFormat} from './dckFormat';
import {Selectors} from './selectors';

const $selectors = new Selectors();
const today = new Date();

const dateMonth = `${today.getMonth()}-${today.getDate()}`;
const fileNameRegex = 'NAME\\s*:\\s*(.*)$\\n.*CREATOR\\s*:\\s*(.*)$\\n.*FORMAT\\s*:\\s*(.*)$';
const getFileName = ({eventName, format, creator, deckName}) => {
  return `decks/${format}/${eventName}/${creator}_${deckName}_${dateMonth}.dck`
};

const saveDeck = (deckFile, $eventPage) => {
  let regexp = new RegExp(fileNameRegex, 'gmi');
  let match = regexp.exec(deckFile);
  let format = match[3].toLowerCase();
  let creator = _.chain(match[2]).deburr().kebabCase().value();
  let deckName = _.kebabCase(match[1]);
  var eventName = _.kebabCase($selectors.$eventName($eventPage).html().split(/-|@/)[1].trim());
  var fileName = getFileName({eventName, format, creator, deckName});
  fs.writeFileSync(ensureDirectory(fileName), toDeckFormat(deckFile, match[1]));
};

const ensureDirectory = (filePath) => {
  var dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    ensureDirectory(dirname);
    fs.mkdirSync(dirname);
  }
  return filePath;
};

export {saveDeck};