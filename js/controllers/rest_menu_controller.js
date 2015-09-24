// JavaScript Document
Outdoor.controller('restMenu', function($scope,$http,$routeParams,$modal) 
{
    $http.get('js/json/team.json').success(function(data)
	{
		setPageHeight();
		$scope.infoArray = data;
		$scope.whichItem = $routeParams.itemId;
		$scope.MenuUrl = "img/pubs/natbag/menu.jpg"
		$scope.BackUrl = checkBackUrl();
		
		$scope.navigateUrl = function (Path,Num) 
		{
			window.location.href = Path+String(Num);	
		}
	});
});// JavaScript Document
