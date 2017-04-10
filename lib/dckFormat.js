'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toDeckFormat = undefined;

var _mtgdata = require('./mtgdata');

var cardRegexString = '^\\s*(SB:)?\\s*(\\d)\\s*\\[(\\w*)]\\s*([\\w\\s,-_\']+?)$';

var toDeckFormat = function toDeckFormat(deckFile, deckName) {
  console.log('Processing Deck: ' + deckName);

  var cards = ['NAME:' + deckName];
  var match = void 0;
  var regexp = new RegExp(cardRegexString, 'gmi');
  while ((match = regexp.exec(deckFile)) !== null) {
    var card = (0, _mtgdata.getCardInfo)(match[4]);
    if (!card) {
      console.log('Card not found! \n' + match[4] + ' in: \n' + deckName + '\n' + deckFile + '\n');
      continue;
    }
    var quantity = match[2],
        sideboard = match[1];

    cards.push('' + (sideboard ? sideboard + ' ' : '') + quantity + ' [' + card.setCode + ':' + card.number + '] ' + card.name);
  }
  return cards.join('\n');
};

exports.toDeckFormat = toDeckFormat;