// JavaScript Document

Outdoor.controller('YoutubeController', function($scope,$http,$routeParams,$modal,$route) 
{
    $http.get('js/json/pubs.json').success(function(data)
	{
		setBackgroundImg();
		$scope.ginun = data;
		$scope.whichItem = $routeParams.itemId;
		CustomerId = $routeParams.itemId;
		$scope.BackUrl = checkBackUrl();
		
		
		$scope.navigateUrl = function (Path,Num) 
		{
			setTimeout(function(){ window.location.href = Path+String(Num); }, 0);	
		}
		
	});
});
