angular.module('myApp')
.controller('homeCtrl', ctrlFunc);

function ctrlFunc($scope, instaService, $state, tokenService){
	// console.log('home controller fired');

	$scope.fireDemo = function(){
		// This demo runs on my access token, which could change in future, instagram
		// doesn't guarantee they don't expire
		var token = '1359984932.c4fe6f4.32721a77599f4b11b20c1f2ffcbedab2';
		tokenService.setToken(token);
		$state.go('results.grade');
	};



























}