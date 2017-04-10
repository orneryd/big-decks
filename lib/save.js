'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveDeck = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _dckFormat = require('./dckFormat');

var _selectors = require('./selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $selectors = new _selectors.Selectors();

var fileNameRegex = 'NAME\\s*:\\s*(.*)$\\n.*CREATOR\\s*:\\s*(.*)$\\n.*FORMAT\\s*:\\s*(.*)$';
var getFileName = function getFileName(_ref) {
  var eventName = _ref.eventName,
      formatName = _ref.formatName,
      creator = _ref.creator,
      deckName = _ref.deckName;

  return 'decks/' + formatName + '/' + eventName + '/' + creator + '_' + deckName + '.dck';
};

var saveDeck = function saveDeck(deckFile, $eventPage, format) {
  var regexp = new RegExp(fileNameRegex, 'gmi');
  var match = regexp.exec(deckFile);
  var formatName = format.name;
  var creator = _lodash2.default.chain(match[2]).deburr().kebabCase().value();
  var deckName = _lodash2.default.kebabCase(match[1]);
  var eventName = _lodash2.default.kebabCase($selectors.$eventName($eventPage).html().split(/-|@/)[1].trim());
  var fileName = getFileName({ eventName: eventName, formatName: formatName, creator: creator, deckName: deckName });
  // fs.writeFileSync(ensureDirectory(fileName), toDeckFormat(deckFile, match[1]));
};

var ensureDirectory = function ensureDirectory(filePath) {
  var dirname = _path2.default.dirname(filePath);
  if (!_fs2.default.existsSync(dirname)) {
    ensureDirectory(dirname);
    _fs2.default.mkdirSync(dirname);
  }
  return filePath;
};

exports.saveDeck = saveDeck;