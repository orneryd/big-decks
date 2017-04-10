'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toKeyName = exports.getCardInfo = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _allSets = require('../node_modules/mtgjson/data/allSets');

var _allSets2 = _interopRequireDefault(_allSets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toKeyName = function toKeyName(val) {
  var name = val.name;
  if (val.layout === 'split') {
    name = val.names.join('/');
  }
  return _lodash2.default.lowerCase(name);
};

var cardData = _lodash2.default.reduce(_allSets2.default, function (all, set) {
  _lodash2.default.each(set.cards, function (card) {
    card.setCode = set.code.split('_')[0];
    card.setName = set.name;
    card.number = card.number || '';
    var nameKey = toKeyName(card);
    all[nameKey] = all[nameKey] || [];
    all[nameKey].push(card);
    return card;
  });
  return all;
}, {});

var getCardInfo = function getCardInfo(cardName) {
  return cardData[toKeyName({ name: cardName })];
};

exports.getCardInfo = getCardInfo;
exports.toKeyName = toKeyName;