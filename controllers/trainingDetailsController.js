mainApp.controller('trainingDetailsController', ['$scope','$http','dataService','$state', '$stateParams','$filter',function($scope,$http,dataService,$state, $stateParams,$filter) {
   $scope.message = "This page will be used to update daily works";
dataService.getTrainingList().then(function(data) {
$scope.training_list = data;
});
dataService.getTrainingDetails().then(function(data) {
$scope.training_list = data;
 var index = $stateParams.index;
$scope.training = $filter('filter')($scope.training_list, function (d) {return d.id === index})[0];

});
}]);
