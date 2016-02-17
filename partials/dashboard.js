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
        .state('trainingList', {
            url: "/trainingList",
            templateUrl: "views/createTraining.html",
            controller: 'createTrainingController'
        })
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/dashboardView.html",
            controller: 'dashboardController'
        })
        .state('home', {
        url : '/home',
        views : {
                '' : {
                    templateUrl : 'views/home.html'
                },
                'status@home' : {
                    templateUrl : 'views/status.html',
                    controller : 'statusController'
                },
                'history@home' : {
                    templateUrl : 'views/history.html',
                    controller : 'statusController'
                }
            }
    })
    .state('trainings', {
            url: "/trainings",
            templateUrl: "views/trainingList.html",
            controller: 'trainingDetailsController'
        })
.state('trainingDetails', {
            url: "/trainingDetails/:index",
            templateUrl: "views/trainingDetailsView.html",
           controller:'trainingDetailsController'
        });
})


            
