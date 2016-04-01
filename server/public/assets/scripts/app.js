var myApp = angular.module('myApp', [ngRoute]);

myApp.configure(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/home', {
    templateUrl: '/public/views/routes/home.html',
    controller: 'HeroController'
  }).
  when('/view', {
    templateUrl: '/public/views/routes/view.html',
    controller: 'ViewController'
  }).
  otherwise({
    redirectTo: '/home'
  });
}]);
