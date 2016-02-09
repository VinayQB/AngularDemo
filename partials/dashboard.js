// var mainApp = angular.module("mainApp", ['ngRoute']);
// mainApp.config(['$routeProvider', function($routeProvider) {
//    $routeProvider.
   
//    when('/dashboard', {
//       templateUrl: 'views/dashboardView.html',
//       controller: 'dashboardController'
//    }).
//    when('/employeeDetails', {
//       templateUrl: 'views/employeeDetails.html',
//       controller: 'employeeDetailsController'
//    }).
   
//    when('/statusUpdate', {
//       templateUrl: 'views/statusUpdate.html',
//       controller: 'statusUpdateController'
//    }).
//    when('/addEmployee', {
//       templateUrl: 'views/addEmployee.html',
//       controller: 'addEmployeeController'
//    }).
//    otherwise({
//       redirectTo: '/dashboard'
//    });
// }]);

 var mainApp = angular.module('mainApp', ['ui.router'])
    mainApp.config(function($stateProvider, $urlRouterProvider){
      
      $urlRouterProvider.otherwise("/dashboard")
      
      $stateProvider
        .state('employeeDetails', {
            url: "/employeeDetails",
            templateUrl:"views/employeeDetails.html",
            controller: "employeeDetailsController"

        })
       .state('employeeDetails.list', {
           url: "/list",
           templateUrl: "views/employeeDetails.list.html",
           controller: "employeeDetailsController"
       })
          
        .state('statusUpdate', {
            url: "/statusUpdate",
            templateUrl: "views/statusUpdate.html",
            controller: 'statusUpdateController'
        })
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboardView.html",
            controller: 'dashboardController'
        })
    })


            