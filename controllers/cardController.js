angular.module('cardTasticApp')
	.controller("CardTasticCtrl", ['$scope', function($scope) {
	$scope.title = "CardTastic E-Card";
	$scope.to = "";
	$scope.from = "";
	$scope.personalizedTextBox = "";
}]);