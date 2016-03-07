(function() {
	'use strict'

	angular
		.module('app')
		.controller('appCtrl', appCtrl)

	appCtrl.$inject = ['sampleService','authService','$state','$http','toastr','$rootScope','navService']

	function appCtrl(sampleService,authService,$state, $http, toastr, $rootScope, navService) {

		console.log("appCtrl");
		navService.info();

		

		 var vm = this;

		 vm.toggleNav = function(){
			console.log("toggling");
		}

		 // on initial load
		 // user login status
		 vm.isLogged = authService.isAuthenticated(vm);

		 $rootScope.$on('loggedIn',function(){
		 	vm.isLogged = true;
		 	vm.email = authService.getEmail();
		 })

		 $rootScope.$on('loggedOut',function(){
		 	vm.isLogged = false;
		 })

	} //end appCtrl

})()


