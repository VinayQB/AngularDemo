var mainApp = angular.module("mainApp", ['ngRoute']);
mainApp.config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   
   when('/dashboard', {
      templateUrl: 'dashboardView.html',
      controller: 'dashboardController'
   }).
   when('/employeeDetails', {
      templateUrl: 'employeeDetails.html',
      controller: 'employeeDetailsController'
   }).
   
   when('/statusUpdate', {
      templateUrl: 'statusUpdate.html',
      controller: 'statusUpdateController'
   }).
   otherwise({
      redirectTo: '/dashboard'
   });
}]);




            