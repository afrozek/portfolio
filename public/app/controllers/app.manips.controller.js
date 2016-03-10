(function() {
	'use strict'

	angular
		.module('app')
		.controller('manipsCtrl', manipsCtrl)

	manipsCtrl.$inject = ['sampleService','authService','$state','$http','toastr','$rootScope','navService','$scope']

	function manipsCtrl(sampleService,authService,$state, $http, toastr, $rootScope, navService,$scope) {

		console.log("manipsCtrl");
		navService.info();

		

		 var vm = $scope;

		 vm.pageTitle = "photo manipulations";

		 vm.data = [
		 	{
				title: "Birthday Wallpaper",
				info: "Wallpaper promoting a birthday. Technology Used: Adobe Photoshop ",
				img:"assets/images/adilBeforeAfter.png"
			},
			{
				title: "Linkedin Touch Up",
				info: "Airbrush, suit color change, fixed tie, and added background. Technology Used: Adobe Photoshop",
				img:"assets/images/dittoBeforeAfter.jpg"
			},
			{
				title: "Linkedin Touch Up",
				info: "Airbrush, tie, background. Technology Used: Adobe Photoshop ",
				img:"assets/images/moizBeforeAfter.png"
			}
			
		 ]

		

	} //end appCtrl

})()
