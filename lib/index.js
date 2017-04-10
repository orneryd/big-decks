'use strict';

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _events = require('./events');

var _decks = require('./decks');

var _save = require('./save');

var _mtgtop = require('./mtgtop8');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formats = [{ path: '/format?f=ST', name: 'standard' }, { path: '/format?f=MO', name: 'modern' }, { path: '/format?f=LE', name: 'legacy' }, { path: '/format?f=VI', name: 'vintage' }, { path: '/format?f=EDH', name: 'commander' }];

formats.forEach(function (format) {
  (0, _mtgtop.mtgtop8)({ path: format.path }, function (formatPage) {
    var $ = _cheerio2.default.load(formatPage);
    var events = (0, _events.getEvents)($);
    events.forEach(function (eventPath) {
      return (0, _mtgtop.mtgtop8)({
        path: eventPath
      }, function (eventPage) {
        var $eventPage = _cheerio2.default.load(eventPage);
        var decks = (0, _decks.getDecks)($eventPage);
        decks.forEach(function (deckPath) {
          (0, _mtgtop.mtgtop8)({
            path: deckPath
          }, function (deckPage) {
            return (0, _mtgtop.mtgtop8)({
              path: (0, _decks.getDeck)(_cheerio2.default.load(deckPage))
            }, function (deckFile) {
              return (0, _save.saveDeck)(deckFile, $eventPage, format);
            });
          });
        });
      });
    });
  });
});