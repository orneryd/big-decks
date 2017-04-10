import http from 'http';
import cache from './mtgtop8-cache';

let defaults = {
  host: 'mtgtop8.com',
  port: 80,
  path: '/format?f=ST'
};

let mtgtop8 = (options, cb) => {
  let body = cache.get(options) || '';
  if (body) {
    cb(body);
  } else {
    let opts = Object.assign({}, defaults, options);
    http.get(opts, function (response) {
      response.on('data', d => body += d);
      response.on('end', () => {
        cache.set(options, body);
        cb(body)
      });
    }).on("error", function (e) {
      console.log("Got error: " + e.message);
    });
  }
};

export {mtgtop8}