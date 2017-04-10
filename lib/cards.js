'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCard = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setsFileFile = 'mtg-cards-data.txt';
var allCardsInfo = {};

var fileData = _fs2.default.readFileSync(setsFileFile).toString();
fileData.split('\n').forEach(function (string) {
  var parts = string.split('|');

  allCardsInfo[parts[0].toLowerCase()] = {
    name: parts[0],
    setName: parts[1],
    number: parts[2]
  };
});

var getCard = function getCard(cardName) {
  if (cardName.indexOf('/')) {
    var halves = cardName.trim().toLowerCase().split('/');
    var left = allCardsInfo[halves[0]] || allCardsInfo[halves[1]];
    return {
      name: cardName,
      setName: left.setName,
      number: left.number.replace(/\D/g, '')
    };
  } else {
    return allCardsInfo[cardName.toLowerCase()];
  }
};

exports.getCard = getCard;