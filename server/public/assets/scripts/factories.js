myApp.factory('HeroService', ['$http', function($http){
  var info = {};

  var getData = funtion(){
    $http.get('/heroes').then(function(response){
      info.results = response.data;
      console.log('Look ', info);
    });
  };

  var postData = function(data){
    $http.post('/heroes').then(funtion(response){
      console.log(response.data)
      getData();
    });
  };

  return {
    postData : postData,
    getData : getData,
    info : info
  };
}]);
