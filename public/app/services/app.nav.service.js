angular
	.module('app')
	.factory('navService', navService)


function navService() {

	var service = {
		info: info
	}

	return service;

	function info () {
		console.log("navService")
	}



}