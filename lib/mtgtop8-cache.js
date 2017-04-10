'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cachePath = function cachePath(fileName) {
  return _path2.default.normalize(__dirname + '/../cache/' + fileName + '.txt');
};

var get = function get(options) {
  var filePath = cachePath(_lodash2.default.camelCase(options.path));
  if (_fs2.default.existsSync(filePath)) {
    return _fs2.default.readFileSync(filePath, 'utf8');
  }
};

var set = function set(options, contents) {
  var filePath = cachePath(_lodash2.default.camelCase(options.path));
  console.log('saving: ' + options.path);
  _fs2.default.writeFileSync(filePath, contents);
};

exports.default = {
  get: get,
  set: set
};