// JavaScript Document
Outdoor.controller('LinePage', function($scope,$http,$routeParams,$modal,$route) 
{
    $http.get('js/json/pubs.json').success(function(data)
	{
		setPageHeight();
		
		LevelOpen = 0;
		$scope.LevelOpen = LevelOpen;
		$scope.BackUrl = checkBackUrl();
		$scope.infoArray = data;
		$scope.whichItem = $routeParams.itemId;
		$scope.Category = Category;
		CustomerId = $routeParams.itemId;
		
		$scope.InfoArray = new Array("משלוחים","אירועים","ישיבה בחוץ","כשר","חנייה","גישה לנכים","WIFI","הופעות","פתוח בשבת")
		
		$scope.openImport = function () 
		{
			var PopUpImport = $modal.open({
			templateUrl: 'templates/popups/import_popup.html',
			controller: 'ImportPopUp'
		})};
		
		
		
		$scope.openRate = function () 
		{
			var RatePopUp = $modal.open({
			templateUrl: 'templates/popups/rate_popup.html',
			controller: 'RatePopUp'
		})};
		
		$scope.OpenPrvParty = function () 
		{
			var PopUp = $modal.open({
			templateUrl: 'templates/popups/prv_party_popup.html',
			controller: 'PrvParty'
		})};
		
		$scope.Club = function () 
		{
			var PopUp = $modal.open({
			templateUrl: 'templates/popups/club_popup.html',
			controller: 'Club'
		})};
		
		$scope.AddFavorite = function () 
		{
			var Favorite = $modal.open({
			templateUrl: 'templates/popups/favorite.html',
			controller: 'Favorite'
		})};
		
		$scope.AddReplay = function () 
		{
			var PopUp = $modal.open({
			templateUrl: 'templates/popups/add_replay.html',
			controller: 'Replay'
		})};
		
		$scope.Invite_Show_Popup = function () 
		{
			var PopUp = $modal.open({
			templateUrl: 'templates/popups/invite_show_popup.html',
			controller: 'Invite_Show_Popup'
		})};
		
		$scope.waze = function (Waze) 
		{
			window.location.href = "waze://?ll=" + Waze + "&n=T";
		}
		
		$scope.navigateUrl = function (Path,Num) 
		{
			setTimeout(function(){ window.location.href = Path+String(Num); }, 0);	
		}
		
		$scope.Call = function (Num) 
		{
			Num = Num.substring(1);
			window.location.href = "tel:+972" + Num;	
		}
		
		$scope.reloadRoute = function () 
		{
			$route.reload();
		};
		
		
		
	});
});

Outdoor.controller('ImportPopUp',function($scope, $modalInstance) 
{
	$scope.closeImportPopup = function () {
		$modalInstance.close();
	};
});


Outdoor.controller('RatePopUp',function($scope, $modalInstance) 
{
	$scope.closeRatePopup = function () {
		$modalInstance.close();
	};
});


Outdoor.controller('PrvParty',function($scope, $modalInstance) 
{
	$scope.closePrvPopup = function () {
		$modalInstance.close();
	};
});

Outdoor.controller('Invite_Show_Popup',function($scope, $modalInstance) 
{
	$scope.closeInvite_Show_Popup = function () {
		$modalInstance.close();
	};
});



Outdoor.controller('Club',function($scope, $modalInstance) 
{
	$scope.CloseClub = function () {
		$modalInstance.close();
	};
});


Outdoor.controller('Favorite',function($scope, $modalInstance) 
{
	$scope.closeFavoritePopup = function () {
		$modalInstance.close();
	};
});



Outdoor.controller('Replay',function($scope, $modalInstance) 
{
	alert("Replay1")
	$scope.closeReplay = function () {
		$modalInstance.close();
	};
	
	$scope.AddReplayText = function () 
	{
		alert("Replay")
		ReplayArray.push({
				"id": "1",
				"name": angular.element('#ReplayTitle').val(),
				"date": "13.3.15",
				"time": "20:553",
				"img": "img/pubs/review.png",
				"info": angular.element('#ReplayDiscription').val()
			})
			
			console.log("ReplayArray")
			console.log(ReplayArray)
			$modalInstance.close();
	};
	
});

Outdoor.filter('InfoPopUp', function() 
{
  return function(input, total) {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});

