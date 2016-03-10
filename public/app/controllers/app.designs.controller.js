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
				title: "Health Blog",
				info: "Health blog made with Angular and PHP",
				img:"assets/images/moizBlog.png"
			},
			{
				title: "NJ TETN Brochure",
				info: "Brochure made for NJ Technology and Entrepreneurship Talent Network. Custom made icons.",
				img: "assets/images/tetnBrochure.png"
			}
		 ]

		

	} //end appCtrl

})()
