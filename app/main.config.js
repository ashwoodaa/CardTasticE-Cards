angular.module('cardTasticApp')
.config (function ($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'views/landing.html',
		controller: 'CardTasticCtrl'
	})
});