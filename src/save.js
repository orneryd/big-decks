import path from 'path';
import _ from 'lodash';
import fs from 'fs';

import {toDeckFormat} from './dckFormat';
import {Selectors} from './selectors';

const $selectors = new Selectors();

const fileNameRegex = 'NAME\\s*:\\s*(.*)$\\n.*CREATOR\\s*:\\s*(.*)$\\n.*FORMAT\\s*:\\s*(.*)$';
const getFileName = ({eventName, formatName, creator, deckName}) => {
  return `decks/${formatName}/${eventName}/${creator}_${deckName}.dck`
};

const saveDeck = (deckFile, $eventPage, format) => {
  let regexp = new RegExp(fileNameRegex, 'gmi');
  let match = regexp.exec(deckFile);
  let formatName = format.name;
  let creator = _.chain(match[2]).deburr().kebabCase().value();
  let deckName = _.kebabCase(match[1]);
  let eventName = _.kebabCase($selectors.$eventName($eventPage).html().split(/-|@/)[1].trim());
  let fileName = getFileName({eventName, formatName, creator, deckName});
  toDeckFormat(deckFile, match[1]);
  fs.writeFileSync(ensureDirectory(fileName), toDeckFormat(deckFile, match[1]));
};

const ensureDirectory = (filePath) => {
  let dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    ensureDirectory(dirname);
    fs.mkdirSync(dirname);
  }
  return filePath;
};

export {saveDeck};