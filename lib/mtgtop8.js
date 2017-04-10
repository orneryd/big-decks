'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mtgtop8 = undefined;

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _mtgtop8Cache = require('./mtgtop8-cache');

var _mtgtop8Cache2 = _interopRequireDefault(_mtgtop8Cache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
  host: 'mtgtop8.com',
  port: 80,
  path: '/format?f=ST'
};

var mtgtop8 = function mtgtop8(options, cb) {
  var body = _mtgtop8Cache2.default.get(options) || '';
  if (body) {
    cb(body);
  } else {
    var opts = Object.assign({}, defaults, options);
    _http2.default.get(opts, function (response) {
      response.on('data', function (d) {
        return body += d;
      });
      response.on('end', function () {
        _mtgtop8Cache2.default.set(options, body);
        cb(body);
      });
    }).on("error", function (e) {
      console.log("Got error: " + e.message);
    });
  }
};

exports.mtgtop8 = mtgtop8;