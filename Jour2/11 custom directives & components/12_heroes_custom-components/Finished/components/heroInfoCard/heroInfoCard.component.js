(function () {
	'use strict';

	angular.module('heroesApp')
		.component('heroInfoCard', {
			templateUrl: 'components/heroInfoCard/heroInfoCard.component.html',
			controller: HeroInfoCardController,
			bindings: {
				hero: '<',
				onDelete: '&'
			}
		});

	HeroInfoCardController.$inject = [];
	function HeroInfoCardController() {


	}
}());