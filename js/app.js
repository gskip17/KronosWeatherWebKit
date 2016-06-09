var app = angular.module('WeatherApp',['ngRoute'], function($compileProvider){
  //$compileProvider.aHrefSanitizationWhitelist('app://');
})

.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider){
  $routeProvider
  .when('/home', {
    templateUrl:'index.html',
    controller:'MainController'
  }).when('./day/:key',{
    templateUrl:'views/day.html',
    controller:'DayController'
  }).otherwise({
    redirectTo: '/home'
  });
  $locationProvider.html5Mode({
    enabled:true
  });
}]);
