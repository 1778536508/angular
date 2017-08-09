var app = angular.module('Myname',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
		.when('/home',{
			templateUrl:'home.html',
			controller:'name1'
		})
		.when('/list',{
			templateUrl:'list.html',
			controller:'name2'
		})
		.otherwise({
			redirectTo:'/home'
		})
})