module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      views: {
        someView: {
          templateUrl: 'app/some-view.html'
        }
      }
    })
    .state('stuff', {
      url: '/stuff/:step',
      views: {
        someView: {
          templateUrl: 'app/some-view.html'
        },
        stuff: {
          template: '<stuff></stuff>'
        }
      }
    })
    .state('about', {
      url: '/about',
      views: {
        "": {
          templateUrl: 'app/about.html'
        }
      }
    });
}
