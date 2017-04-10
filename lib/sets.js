'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSetCode = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setsFileFile = 'mtg-sets-data.txt';
var allSetInfo = {};

var fileData = _fs2.default.readFileSync(setsFileFile).toString();
_lodash2.default.chunk(fileData.split('|'), 2).forEach(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      val = _ref2[0],
      key = _ref2[1];

  return key && (allSetInfo[val.replace(/\n|\r/g, '')] = key);
});

var getSetCode = function getSetCode(setName) {
  return allSetInfo[setName];
};

exports.getSetCode = getSetCode;