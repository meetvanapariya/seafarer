angular.module("myApp",['ui.router'])
.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
 $stateProvider
 .state('home',{
 	url : '/home',
 	templateUrl : 'view/home.html',
 	controller : 'homeCtrl'	
 })
 .state('about',{
 	url : '/about',
 	templateUrl : 'view/about.html',
 	controller : 'aboutCltr'
 })
 .state('gallary',{
 	url : '/gallary',
 	templateUrl : 'view/gallary.html',
 	controller : 'gallaryCltr'
 })
 .state('events',{
 	url : '/events',
 	templateUrl : 'view/events.html',
 	controller : 'eventsCltr'
 })
 $urlRouterProvider.otherwise('/home');
}])