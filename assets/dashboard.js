var mainApp = angular.module("mainApp", ['ngRoute']);
mainApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
   when('/employeeDetails', {
      templateUrl: 'employeeDetails.html',
      controller: 'employeeDetailsController'
   }).
   
   when('/statusUpdate', {
      templateUrl: 'statusUpdate.html',
      controller: 'statusUpdateController'
   }).
   
   otherwise({
      redirectTo: '/employeeDetails'
   });
}]);




            