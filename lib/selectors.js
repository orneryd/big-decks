'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Selectors = function () {
  function Selectors() {
    _classCallCheck(this, Selectors);
  }

  _createClass(Selectors, [{
    key: '$eventName',
    value: function $eventName($) {
      return $('title');
    }
  }, {
    key: '$deckFileLink',
    value: function $deckFileLink($) {
      return $('.Nav_link a:nth-child(2)');
    }
  }, {
    key: '$deckLink',
    value: function $deckLink($) {
      return $('.hover_tr a, .chosen_tr a');
    }
  }, {
    key: '$eventLink',
    value: function $eventLink($) {
      return $('td:nth-child(2) .hover_tr a');
    }
  }]);

  return Selectors;
}();

exports.Selectors = Selectors;