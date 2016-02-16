mainApp.controller('trainingDetailsController', ['$scope','$http','dataService',function($scope,$http,dataService) {
   $scope.message = "This page will be used to update daily works";
dataService.getTrainingDetails().then(function(data) {
$scope.training_list = data;
angular.forEach($scope.training_list, function(item){
                   console.log(item.Topic);  
               })
});
}]);
