// JavaScript Document
Outdoor.controller('ReplayController', function($scope,$http,$routeParams,$modal) 
{
	$http.get('js/json/replay.json',{dataType:"json",contentType: 'application/json; charset=utf-8'}).success(function(data)
	{
			setPageHeight();
			$scope.ReplayArray = data;
			$scope.BackUrl = checkBackUrl();
			
			for(var i=0;i<ReplayArray.length;i++)
			$scope.ReplayArray.push(ReplayArray[i]);
			
			$scope.whichItem = $routeParams.itemId;
		});
	});