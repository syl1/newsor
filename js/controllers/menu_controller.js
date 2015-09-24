// JavaScript Document

Outdoor.controller('MenuController', function($scope,$http) 
{
    $http.get('js/json/pubs.json').success(function(data)
	{
		setBackgroundImg();
		$scope.ginun = data;
		Page_Id = 2;
		$scope.BackUrl = checkBackUrl();
		
		$scope.navigateUrl = function (Path,Num) 
		{
			setTimeout(function(){ window.location.href = Path+String(Num); }, 0);	
		}
		
	});
});