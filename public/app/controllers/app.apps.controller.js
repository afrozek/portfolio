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
		  vm.pageTitle = "Portfolio";

		 vm.data = [
			 {
				title: "Budget Manager",
				info: "Wanted to make something like Google Keep and Trello for practice, unique thing about this app is that you can drag and drop from mobile devices thanks to the touchpunch library. You can also save your notes to retrieve them later. Going to change the UI soon and integrate websockets, sharing and other features. Technologies Used: Angular,NodeJs, MongoDB",
				img:"assets/images/budgetManager.gif"
			},
			{
				title: "NoteTaker",
				info: "Wanted to make something like Google Keep and Trello for practice, unique thing about this app is that you can drag and drop from mobile devices thanks to the touchpunch library. You can also save your notes to retrieve them later. Going to change the UI soon and integrate websockets, sharing and other features. Technologies Used: Angular,NodeJs, MongoDB",
				img:"assets/gifs/notetaker.gif"
			},
			{
				title: "Health Blog",
				info: "Health blog made with Angular and PHP",
				img:"assets/images/moizBlog.png"
			},
			{
				title: "NJ TETN Brochure",
				info: "Brochure made for NJ Technology and Entrepreneurship Talent Network. Custom made icons.",
				img: "assets/images/tetnBrochure.png"
			},
			{
				title: "NJ TETN Linkedin Web Ad",
				info: "Web Advertisements featured on Linkedin",
				img: "assets/images/tetnAd.png"
			}

		 ]

		

	} //end appCtrl

})()








