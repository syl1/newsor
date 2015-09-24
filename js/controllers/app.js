

var Outdoor = angular.module('Outdoor', ['ngRoute','ui.bootstrap','ngAnimate']);	

Outdoor.run(function() 
{
	angular.element('.Content').css('height', window.innerHeight+'px');
	angular.element('.YouTubePage').css('height', window.innerHeight+'px');
	//angular.element('.fullHeight').css('height', 1900+'px');
});



////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////  Main Controller  //////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

Outdoor.factory('Navigate', function() 
{
    return 
	{
     
   	};
});
	
Outdoor.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/List/:itemId', {
        templateUrl: 'templates/list.html',
        controller: 'ListPage'
    }).
    when('/Line/:itemId', {
        templateUrl: 'templates/line.html',
        controller: 'LinePage'
    }).
	when('/Main/', {
        templateUrl: 'templates/main.html',
        controller: 'MainController'
    }).
	when('/Menu/', {
        templateUrl: 'templates/menu.html',
        controller: 'MenuController'
    }).
	when('/Gallery/:itemId', {
        templateUrl: 'templates/gallery.html',
        controller: 'GalleryController'
    }).
	when('/Invite/:itemId', {
        templateUrl: 'templates/invite_place.html',
        controller: 'InviteController'
    }).
	when('/PrvImages/:itemId', {
        templateUrl: 'templates/prv_images.html',
        controller: 'PrvController'
    }).
	when('/Birthday/:itemId', {
        templateUrl: 'templates/birthday.html',
        controller: 'BirthdayController'
    }).
	when('/Coupons/:itemId', {
        templateUrl: 'templates/coupons.html',
        controller: 'CouponsController'
    }).
	when('/Team/:itemId', {
        templateUrl: 'templates/team.html',
        controller: 'TeamController'
    }).
	when('/Review/:itemId', {
        templateUrl: 'templates/review.html',
        controller: 'ReviewController'
    }).
	when('/Pub/:itemId', {
        templateUrl: 'templates/pub.html',
        controller: 'PubController'
    }).
	when('/Youtube/:itemId', {
        templateUrl: 'templates/youtube.html',
        controller: 'YoutubeController'
    }).
	when('/RestMenu/:itemId', {
        templateUrl: 'templates/rest_menu.html',
        controller: 'restMenu'
    }).
	when('/Chef/:itemId', {
        templateUrl: 'templates/Chef.html',
        controller: 'Chef'
    }).
	when('/MoviesTimes/:itemId', {
        templateUrl: 'templates/movies_times.html',
        controller: 'MoviesTimes'
    }).
	when('/Profile/:itemId', {
        templateUrl: 'templates/profile.html',
        controller: 'Profile'
    }).
	when('/Points/:itemId', {
        templateUrl: 'templates/points.html',
        controller: 'Points'
    }).
	when('/News/:itemId', {
        templateUrl: 'templates/news.html',
        controller: 'News'
    }).
	when('/NewsPage/:itemId', {
        templateUrl: 'templates/news_page.html',
        controller: 'News_page'
    }).
    otherwise({
        redirectTo: '/Main'
    });
}]);



////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////  DetailsController /////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////


Outdoor.controller('DetailsController', function($scope,$http,$routeParams) {
 	
	$http.get('js/ginun.json').success(function(data)
	{
		$scope.ginun = data;
		$scope.whichItem = $routeParams.itemId;
		
		if($routeParams.itemId > 0 )
		{
			$scope.prevItem = Number($routeParams.itemId)-1;
		}
		else
		{
			$scope.prevItem = $scope.ginun.length-1;
		}
		
		
		if($routeParams.itemId < $scope.ginun.length-1)
		{
			$scope.nextItem = Number($routeParams.itemId)+1;
		}
		else
		{
			$scope.nextItem = 0;
		}
		
		$scope.pageClass = 'page-about';
		
		chooseColor();
	});
});
