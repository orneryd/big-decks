'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = undefined;

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
  host: 'mtgtop8.com',
  port: 80,
  path: '/format?f=ST'
};

var request = function request(options, cb) {
  var opts = Object.assign({}, defaults, options);
  _http2.default.get(opts, function (response) {
    var body = '';
    response.on('data', function (d) {
      return body += d;
    });
    response.on('end', function () {
      return cb(body);
    });
  }).on("error", function (e) {
    console.log("Got error: " + e.message);
  });
};

exports.request = request;