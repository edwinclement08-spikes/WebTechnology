var app = angular.module('MyApp', []);


app.controller("MasterController", function ($scope) {


});

app.controller('loginFormCTL', function ($scope, $http) {

});


app.controller('changePassCTL', function ($scope, $http) {
	$scope.passwordFieldType = "password";
	
		$scope.toggleType = function () {
			if ($scope.passwordFieldType == "password") {
				$scope.passwordFieldType = "text";
			} else {
				$scope.passwordFieldType = "password";
			}
			document.getElementById('changePass-password-input').type = $scope.passwordFieldType;
		}
});


app.controller('RegisterFormCTL', function ($scope, $http) {

	$scope.passwordFieldType = "password";

	$scope.toggleType = function () {
		if ($scope.passwordFieldType == "password") {
			$scope.passwordFieldType = "text";
		} else {
			$scope.passwordFieldType = "password";
		}
		document.getElementById('register-password-input').type = $scope.passwordFieldType;
	}


});

app.controller('RecoverFormCTL', function ($scope, $http) {

	$scope.passwordFieldType = "password";

	$scope.toggleType = function () {
		if ($scope.passwordFieldType == "password") {
			$scope.passwordFieldType = "text";
		} else {
			$scope.passwordFieldType = "password";
		}
		document.getElementById('register-password-input').type = $scope.passwordFieldType;
	}


});
