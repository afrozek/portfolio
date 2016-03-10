(function() {
	'use strict'

	angular
		.module('app')
		.controller('appsCtrl', appsCtrl)

	appsCtrl.$inject = ['sampleService','authService','$state','$http','toastr','$rootScope','navService','$scope']

	function appsCtrl(sampleService,authService,$state, $http, toastr, $rootScope, navService,$scope) {

		console.log("appsCtrl");
		navService.info();

		

		 var vm = $scope;
		  vm.pageTitle = "apps";

		 vm.data = [
			{
				title: "NoteTaker",
				info: "Wanted to make something like google keep and trello for practice, unique thing about this app is that you can drag and drop from mobile devices thanks to the touchpunch library. You can also save your notes to retrieve them later. Going to change the UI soon and integrate websockets, sharing and other features. Technologies Used: Angular,NodeJs, MongoDB",
				img:"assets/gifs/notetaker.gif"
			}
		 ]

		

	} //end appCtrl

})()








