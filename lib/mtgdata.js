'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCardInfo = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _allSets = require('../node_modules/mtgjson/data/allSets');

var _allSets2 = _interopRequireDefault(_allSets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toCamelCaseName = function toCamelCaseName(val) {
  return _lodash2.default.camelCase(val.name);
};
var cardData = _lodash2.default.reduce(_allSets2.default, function (all, set) {
  _lodash2.default.each(set.cards, function (card) {
    card.setCode = set.code;
    card.setName = set.name;
    var nameKey = toCamelCaseName(card);
    all[nameKey] = all[nameKey] || [];
    all[nameKey].push(card);
    return card;
  });
  return all;
}, {});

var getCardInfo = function getCardInfo(cardName) {
  return cardData[_lodash2.default.camelCase(cardName)];
};

exports.getCardInfo = getCardInfo;