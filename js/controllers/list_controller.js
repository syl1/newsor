// JavaScript Document

Outdoor.controller('ListPage', function($scope,$http,$routeParams,$modal,$route) 
{
	Category = $routeParams.itemId;
	$scope.Category = Category;
	
	if($scope.Category != 4)
	jsonUrl = 'js/json/pubs.json'
	else
	jsonUrl = 'js/json/movies.json'
	
    $http.get(jsonUrl).success(function(data)
	{
		$scope.whichItem = $routeParams.itemId;
		
		setPageHeight();	
		$scope.infoArray = data;
		$scope.Rand = Math.floor(Math.random()*2)+1;
		$scope.Rand1 = Math.floor(Math.random()*7)+1;
		$scope.Rand2 = Math.floor(Math.random()*7)+1;
		
		$scope.BackUrl = checkBackUrl();
		
		if($scope.Category == 1 || $scope.Category == 4 || $scope.Category == 6)
		$scope.NextPage = "#/Pub/"
		else
		$scope.NextPage = "#/Line/"
		
		$scope.navigateUrl = function (Path,Num) 
		{
			window.location.href = Path+String(Num);
		}
		
		
		$scope.shuffle_table = function () 
		{
			$scope.infoArray = shuffle($scope.infoArray);
		}
	});

});


Outdoor.filter('cutString_ListPage', function () {
    return function (value, wordwise, max, tail) 
	{
        if (!value) return '';
		
        max = parseInt(max, 10);
        if (!max) return value;
        if (value.length <= max) return value;

        value = value.substr(0, max);
        if (wordwise) {
            var lastspace = value.lastIndexOf(' ');
            if (lastspace != -1) {
                value = value.substr(0, lastspace);
            }
        }
        return value + (tail || ' …');
    };
});



function shuffle(o)
{ //v1.0
   	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};