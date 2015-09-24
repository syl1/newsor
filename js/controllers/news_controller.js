// JavaScript Document
Outdoor.controller('News', function($scope,$http,$routeParams,$modal) 
{
    $http.get('js/json/news.json').success(function(data)
	{
		setPageHeight();
		$scope.infoArray = data;
		$scope.whichItem = $routeParams.itemId;
		$scope.BackUrl = checkBackUrl();
		$scope.InfoArray = new Array("משלוחים","אירועים","ישיבה בחוץ","כשר","חנייה","גישה לנכים","WIFI","הופעות","פתוח בשבת")
		
		$scope.Rand = Math.floor(Math.random()*2)+1;
		$scope.Rand1 = Math.floor(Math.random()*7)+1;
		$scope.Rand2 = Math.floor(Math.random()*7)+1;
		
		$scope.navigateUrl = function (Path,Num) 
		{
			window.location.href = Path+String(Num);	
		}
	});
});// JavaScript Document
