angular.module('myApp')
.service('demoService', demoServiceFunc);

function demoServiceFunc($http){
	this.test = function(){
		console.log('test');
	};


	this.getLastDemoReport = function(){
		return $http.get('/api/reports/demoReport?id=56c2cdf50d77a089318953e7')
		.then(function(response){
			return response.data;
		})
	};

	this.getStatsDemo = function(){
		console.log('get stats demo service');
		return $http.get('/api/demo/stats')
		.then(function(response){
			console.log(response.data);
			return response.data;
		})


	}

	this.getSpecificReport = function(id){
		return $http.get('/api/reports/demoReport?id='+id)
		.then(function(response){
			return response.data;
		})
	}

















} // end of demoService Function ,nothing below this



