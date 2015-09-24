
Outdoor.controller('InviteController', function($scope,$http,$routeParams,$modal) 
{
    $http.get('js/json/pubs.json').success(function(data)
	{
		$scope.infoArray = data;
		$scope.whichItem = $routeParams.itemId;
		$scope.BackUrl = checkBackUrl();
		
		$scope.navigateUrl = function (Path,Num) 
		{
			User = angular.element('#invName').val(); 
			//alert(User)
			Message = 'התקבלה הזמנת מקום חדשב מ '+ User;
			//alert('התקבלה הזמנת מקום חדשב מ ' + User)
			Send_Value("0509666662",Message);
			setTimeout(function(){ window.location.href = Path+String(Num); }, 0);
		}
	});
});


