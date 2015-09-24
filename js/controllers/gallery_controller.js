
Outdoor.controller('GalleryController', function($scope,$http,$routeParams,$modal) 
{
    $http.get('js/json/pubs.json').success(function(data)
	{
		$scope.infoArray = data;
		$scope.whichItem = $routeParams.itemId;
		$scope.BackUrl = checkBackUrl();
		
		$scope.navigateUrl = function (Path,Num) 
		{
			window.location.href = Path+String(Num);	
		}
	});
});