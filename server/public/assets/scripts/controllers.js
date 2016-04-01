myApp.controller('HeroController', ['$scope', 'HeroService', function($scope, HeroService){
  var heroObject = {};
  var heroService = HeroService;

  $scope.clickMe = function(data){
    heroService.postData(data);
  };
}]);

myApp.controller('ViewController', ['$scope', 'HeroService', function($scope, HeroService){
  var heroService = HeroService;

  heroService.getData();
  $scope.info = heroService.info;

  $scope.showId = function(object);
    console.log(object._id);
  };
}]);
