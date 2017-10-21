var app = angular.module('MyApp', []);


app.controller("MasterController", function($scope)	{
	

});

app.controller('loginFormCTL', function($scope, $http){
	 // action="/login" method="post"
	 // $scope.submitData = function (user)
	 // {
	 // 	$http({
	 // 		url: "/login",
	 // 		method: "POST",
	 // 		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	 // 		data:$.param(user)
	 // 	}).then(function(data, status, headers, config) {
	 // 		$scope.output = status;
	 // 	}).catch(function(data, status, headers, config) {
	 // 		$scope.output = status;
	 // 	});
	 // };
	});


app.controller('RegisterFormCTL', function($scope, $http){

	$scope.passwordFieldType = "password";

	$scope.toggleType = function()	{
		if ($scope.passwordFieldType == "password")	{
			$scope.passwordFieldType = "text";
		} else {
			$scope.passwordFieldType = "password";
		}
		document.getElementById('register-password-input').type =$scope.passwordFieldType;
	}

	 // action="/login" method="post"
	 // $scope.submitData = function (user)
	 // {
	 // 	$http({
	 // 		url: "/sad",
	 // 		method: "POST",
	 // 		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	 // 		data:$.param(user)
	 // 	}).then(function(data, status, headers, config) {
	 // 		$scope.output = status;
	 // 	}).catch(function(data, status, headers, config) {
	 // 		$scope.output = status;
	 // 	});
	 // };
	});

app.controller('RecoverFormCTL', function($scope, $http){

	$scope.passwordFieldType = "password";

	$scope.toggleType = function()	{
		if ($scope.passwordFieldType == "password")	{
			$scope.passwordFieldType = "text";
		} else {
			$scope.passwordFieldType = "password";
		}
		document.getElementById('register-password-input').type =$scope.passwordFieldType;
	}
	
	 // action="/login" method="post"
	 // $scope.submitData = function (user)
	 // {
	 // 	$http({
	 // 		url: "/sad",
	 // 		method: "POST",
	 // 		headers: {'Content-Type': 'application/x-www-form-urlencoded'},
	 // 		data:$.param(user)
	 // 	}).then(function(data, status, headers, config) {
	 // 		$scope.output = status;
	 // 	}).catch(function(data, status, headers, config) {
	 // 		$scope.output = status;
	 // 	});
	 // };
	});
