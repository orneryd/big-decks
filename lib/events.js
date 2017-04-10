'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getEvents = undefined;

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _selectors = require('./selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $selectors = new _selectors.Selectors();

var getEvents = function getEvents(dom) {
  var events = [];
  var elements = $selectors.$eventLink(dom);
  for (var i = 0; i < elements.length; i++) {
    events.push('/' + (0, _cheerio2.default)(elements[i]).attr('href'));
  }
  return events;
};

exports.getEvents = getEvents;