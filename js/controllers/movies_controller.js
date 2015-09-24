// JavaScript Document
Outdoor.controller('Movies', function($scope,$http,$routeParams,$modal) 
{
    $http.get('js/json/movies.json').success(function(data)
	{
		setPageHeight();
		$scope.infoArray = data;
		$scope.whichItem = $routeParams.itemId;
		$scope.BackUrl = checkBackUrl();
		
		$scope.navigateUrl = function (Path,Num) 
		{
			window.location.href = Path+String(Num);	
		}
	});
});// JavaScript Document
// JavaScript Document