var myapp = angular.module('myapp', ['ui.router']);
myapp.config(function ($stateProvider, $urlRouterProvider) {

	// For any unmatched url, send to /route1
	$urlRouterProvider.otherwise('/route1');

	$stateProvider
		.state('route1', {
			url: '/route1',
			templateUrl: 'route1.html',
			controller: function ($state) {
				console.log('new Route1 CTRL', $state);
			}
		})
		.state('route1.list', {
			url: '/list',
			templateUrl: 'route1.list.html',
			controller: function ($scope) {
				console.log('new Route1.List CTRL');
				$scope.items = ['A', 'List', 'Of', 'Items_for_route1.list'];
			}
		})

		.state('route2', {
			url: '/route2',
			templateUrl: 'route2.html',
			controller: function ($state) {
				console.log('new Route2 CTRL', $state);
			}
		})
		.state('route2.list', {
			url: '/list',
			templateUrl: 'route2.list.html',
			controller: function ($scope) {
				console.log('new Route2.List CTRL');
				$scope.things = ['B', 'Set2', 'Of2', 'Things_for_route2.list'];
			}
		})
});
