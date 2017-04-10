'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toDeckFormat = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _mtgdata = require('./mtgdata');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cardRegexString = '^\\s*(SB:)?\\s*(\\d)\\s*\\[(\\w*)]\\s*([\\w\\s,-_\']+?)$';

var toDeckFormat = function toDeckFormat(deckFile, deckName) {
  console.log('Processing Deck: ' + deckName);

  var cards = ['NAME:' + deckName];
  var match = void 0;
  var regexp = new RegExp(cardRegexString, 'gmi');
  while ((match = regexp.exec(deckFile)) !== null) {
    var card = _lodash2.default.last((0, _mtgdata.getCardInfo)(match[4]));
    if (!card) {
      console.log('Card not found! \n' + match[4] + ' in: \n' + deckName + '\n' + deckFile + '\n');
      continue;
    }
    var quantity = match[2],
        sideboard = match[1];

    var cardName = card.name;
    if (card.layout === 'split') {
      cardName = card.names.join('/');
    }
    cards.push('' + (sideboard ? sideboard + ' ' : '') + quantity + ' [' + card.setCode + ':' + card.number + '] ' + cardName);
  }
  return cards.join('\n');
};

exports.toDeckFormat = toDeckFormat;