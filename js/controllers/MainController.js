app.controller('MainController',['$scope','forecast',function($scope,forecast){
  $scope.title = 'Kronos Weather Forecast';
  forecast.success(function(data){
    $scope.fiveDay = data.query.results.channel.item.forecast;
    $scope.fiveDay.icon = "Sunny";
  });

}]);
