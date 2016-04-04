(function() {
	'use strict'

	angular
		.module('app')
		.controller('appCtrl', appCtrl)

	appCtrl.$inject = ['sampleService','$state','$http','$rootScope','navService']

	function appCtrl(sampleService,$state, $http, $rootScope, navService) {

		console.log("appCtrl");
		navService.info();

		

		 var vm = this;



			

	} //end appCtrl

})()


