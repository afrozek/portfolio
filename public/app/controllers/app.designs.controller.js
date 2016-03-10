(function() {
	'use strict'

	angular
		.module('app')
		.controller('designsCtrl', designsCtrl)

	designsCtrl.$inject = ['sampleService','authService','$state','$http','toastr','$rootScope','navService','$scope']

	function designsCtrl(sampleService,authService,$state, $http, toastr, $rootScope, navService,$scope) {

		console.log("designsCtrl");
		navService.info();

		

		 var vm = $scope;

		  vm.pageTitle = "designs";

		 vm.data = [
			{
				title: "NoteTaker",
				info: "Wanted to make something like google keep and trello for practice, unique thing about this app is that you can drag and drop from mobile devices thanks to the touchpunch library. You can also save your notes to retrieve them later. Going to change the UI soon and integrate websockets, sharing and other features.",
				img:"assets/gifs/notetaker.gif"
			},
			{
				title: "MoizLatif",
				info: "so goods",
				img:"assets/images/sampleDisplay.png"
			}
		 ]

		

	} //end appCtrl

})()
