// JavaScript Document
Outdoor.controller('ReviewController', function($scope,$http,$routeParams,$modal) 
{
    $http.get('js/json/team.json').success(function(data)
	{
		setPageHeight();
		$scope.infoArray = data;
		$scope.whichItem = $routeParams.itemId;
		$scope.BackUrl = checkBackUrl();
		
		$scope.navigateUrl = function (Path,Num) 
		{
			window.location.href = Path+String(Num);	
		}
		
		$scope.openCoupon = function () 
		{
			var PopUpImport = $modal.open({
			templateUrl: 'templates/popups/coupon_popup.html',
			controller: 'CouponPopUp'
		})};
	});
});// JavaScript Document

