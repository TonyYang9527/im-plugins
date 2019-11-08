const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/', { target: 'http://mol.dev.bwoilmarine.com' }));
};