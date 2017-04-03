import http from 'http';

let defaults = {
  host: 'mtgtop8.com',
  port: 80,
  path: '/format?f=ST'
};

let request = (options, cb) => {
  let opts = Object.assign({}, defaults, options);
    http.get(opts, function(response){
      var body = '';
      response.on('data', d => body += d);
      response.on('end', () => cb(body));
    }).on("error", function(e){
      console.log("Got error: " + e.message);
    });
};

export { request }