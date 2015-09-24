// JavaScript Document
Outdoor.controller('PubController', function($scope,$http,$routeParams,$modal,$route) 
{
    $http.get('js/json/pubs.json').success(function(data)
	{
		LevelOpen = 1;
		$scope.BackUrl = checkBackUrl();
		$scope.LevelOpen = LevelOpen;
		setPageHeight();
		$scope.infoArray = data;
		$scope.whichItem = $routeParams.itemId;
		CustomerId = $routeParams.itemId;
		$scope.Category = Category;
		
		$scope.InfoArray = new Array("משלוחים","אירועים","ישיבה בחוץ","כשר","חנייה","גישה לנכים","WIFI","הופעות","פתוח בשבת")
		
		
		
		if($scope.Category == 1 || $scope.Category == 4 || $scope.Category == 6)
		{
			$scope.NextPage = "#/List/"
			$scope.Category = Category;
		}
		else
		{
			$scope.NextPage = "#/Line/"
			$scope.rCategory = Category;
			$scope.Category = $scope.whichItem;
		}
		
		
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
			controller: 'ImportPopUp'
		})};
		
		$scope.openWeek = function () 
		{
			var RatePopUp = $modal.open({
			templateUrl: 'templates/popups/week.html',
			controller: 'WeekPopUp'
		})};
		
		$scope.Invite_Show_Popup = function () 
		{
			var PopUp = $modal.open({
			templateUrl: 'templates/popups/invite_show_popup.html',
			controller: 'Invite_Show_Popup'
		})};
		
		
		$scope.OpenSeasonTicket = function () 
		{
			var RatePopUp = $modal.open({
			templateUrl: 'templates/popups/season_ticket.html',
			controller: 'OpenSeasonTicket'
		})};
		
		$scope.OpenPrvParty = function () 
		{
			var PopUp = $modal.open({
			templateUrl: 'templates/popups/prv_party_popup.html',
			controller: 'PrvParty'
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
		
		$scope.navigateUrl = function (Path,Num) 
		{
			setTimeout(function(){ window.location.href = Path+String(Num); }, 0);	
		}
		
		$scope.reloadRoute = function () 
		{
			$route.reload();
		};
		
		$scope.Call = function (Num) 
		{
			Num = Num.substring(1);
			window.location.href = "tel:+972" + Num;	
		}
		
	});
});

Outdoor.controller('ImportPopUp',function($scope, $modalInstance) 
{
	$scope.closeImportPopup = function () {
		$modalInstance.close();
	};
});


Outdoor.controller('WeekPopUp',function($scope, $modalInstance) 
{
	$scope.closeWeekPopup = function () {
		$modalInstance.close();
	};
});



Outdoor.controller('Invite_Show_Popup',function($scope, $modalInstance) 
{
	$scope.closeInvite_Show_Popup = function () {
		$modalInstance.close();
	};
});


Outdoor.controller('OpenSeasonTicket',function($scope, $modalInstance) 
{
	$scope.RestInfoArray = new Array("תאטרון","מחול","ילדים","הופעות","הרצאות");
	$scope.RestArrayLength = $scope.RestInfoArray.length;
		
	Outdoor.filter('InfoPopUp', function() 
	{
	  return function(input, total) {
		total = parseInt(total);
		for (var i=0; i<total; i++)
		  input.push(i);
		return input;
	  };
	});

	$scope.closeSeasonTicket = function () {
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


Outdoor.controller('Favorite',function($scope, $modalInstance) 
{
	$scope.closeFavoritePopup = function () {
		$modalInstance.close();
	};
});



Outdoor.controller('Replay',function($scope, $modalInstance) 
{
	$scope.closeReplay = function () {
		$modalInstance.close();
	};
	
	$scope.AddReplayText = function () 
	{
		ReplayArray.push({
				"id": "1",
				"name": angular.element('#ReplayTitle').val(),
				"date": "13.3.15",
				"time": "20:553",
				"img": "img/pubs/review.png",
				"info": angular.element('#ReplayDiscription').val()
			})
			
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


Outdoor.filter('range', function() 
{
  return function(input, total) 
  {
    total = parseInt(total);
    for (var i=0; i<total; i++)
      input.push(i);
    return input;
  };
});
// JavaScript Document