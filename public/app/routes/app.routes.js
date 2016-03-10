
angular.module('app')
	.config(['$urlRouterProvider','$stateProvider','$httpProvider',function($urlRouterProvider,$stateProvider,$httpProvider){
		
		$urlRouterProvider.otherwise('home');
		//states
		$stateProvider

		.decorator('path', function(state, parentFn) {
			//console.log("configuring states")	
			if (state.self.resolve === undefined) {
				state.self.resolve = {};
				state.resolve = state.self.resolve;
			}
			return parentFn(state);
         })

		.state('app',{
			abstract: true,
			templateUrl:'app/views/app.view.html',
			controller: 'appCtrl',
			controllerAs: 'app'

		})

		.state('app.home',{
			url: '/home',
			templateUrl:'app/views/app.home.html',
			controller: 'homeCtrl',
			controllerAs: 'home',
			data: {
				permission: false,
				permissionLevel: ['everyone']
			}
		})

		.state('app.bio',{
			url: '/bio',
			templateUrl:'app/views/app.bio.html',
			//controller: 'bioCtrl',
			controllerAs: 'bio',
			data: {
				permission: false,
				permissionLevel: ['everyone']
			}
		})

		.state('app.skills',{
			url: '/skills',
			templateUrl:'app/views/app.skills.html',
			//controller: 'skillsCtrl',
			controllerAs: 'skills',
			data: {
				permission: false,
				permissionLevel: ['everyone']
			}
		})

		.state('app.portfolio',{
			url: '/portfolio',
			templateUrl:'app/views/app.portfolio.html',
			//controller: 'portfolioCtrl',
			controllerAs: 'portfolio',
			data: {
				permission: false,
				permissionLevel: ['everyone']
			}
		})


		.state('app.register',{
			url: '/register',
			templateUrl:'components/register/views/register.view.html',
			controller: 'registerCtrl',
			controllerAs: 'register',
			data: {
				permission: false,
				permissionLevel: ['everyone']
			}
		})

		.state('app.members',{
			url: '/members',
			templateUrl:'components/members/views/members.home.html',
			controller: 'membersCtrl',
			controllerAs: 'members',
			data: {
				permission: true,
				permissionLevel: ['admin','member']
			}
		})

		.state('app.notes',{
			url: '/notes',
			templateUrl:'components/notes/views/notes.view.html',
			controller: 'notesCtrl',
			controllerAs: 'notes',
			data: {
				permission: true,
				permissionLevel: ['admin','member']
			}
		})

		.state('app.apps',{
			url: '/apps',
			templateUrl:'app/views/app.portfolio.template.html',
			controller: 'appsCtrl',
			controllerAs: 'apps',
			data: {
				permission: false,
				permissionLevel: ['everyone']
			}
		})

		//$httpProvider.interceptors.push('authInterceptor');



	}]);

