var angular = require('angular');
require('ngstorage');
require('angular-ui-router');
require('angular-touch');
require('angular-animate');
require('bootstrap-loader');

var routesConfig = require('./routes');

// Bootstrap angular UI modules :
// var bs_accordion = require ('angular-ui-bootstrap/src/accordion');
//! Bootstrap angular UI modules

var main = require('./app/main');
var someView = require('./app/some-view');

// require('./index.scss');

angular
  .module('app', [
    'ngAnimate',
    'ngTouch',
    'ui.router',
    'ngStorage'
  ])
  .config(routesConfig)
  .component('app', main)
  .component('someView', someView);