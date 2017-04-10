'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDeck = exports.getDecks = undefined;

var _selectors = require('./selectors');

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $selectors = new _selectors.Selectors();


var getDecks = function getDecks(dom) {
  var decks = [];
  var elements = $selectors.$deckLink(dom);
  for (var i = 0; i < elements.length; i++) {
    var href = (0, _cheerio2.default)(elements[i]).attr('href');
    if (href.indexOf('&d=') !== -1) {
      decks.push('/event' + href);
    }
  }
  return decks;
};

var getDeck = function getDeck(dom) {
  var element = $selectors.$deckFileLink(dom);
  return '/' + element.attr('href');
};

exports.getDecks = getDecks;
exports.getDeck = getDeck;