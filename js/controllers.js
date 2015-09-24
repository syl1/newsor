angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

		$scope.navigateUrl = function (Path,Num) 
		{
			window.location.href = Path+String(Num);
		}

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  
  $scope.aboutPage = function() { 
  window.location.href = "#/app/about";
  }
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('About', function($scope,$http,$rootScope) 
{
	$scope.imageurl = $rootScope.host;
	$scope.aboutimage = $rootScope.aboutimage 
	$scope.abouttitle = $rootScope.abouttitle
	$scope.abouttext = $rootScope.abouttext
})


.controller('Feedback', function($scope,$http,$rootScope) 
{
	$scope.sendFeedback  = function() { 
		$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
		
	data = {
			"answers" : "342",
			"openquestion" : $scope.openQuestion
			}
		$http.post($rootScope.host+'/send_Feedback.php',data)
        .success(function(data, status, headers, config)
        {
			$scope.openQuestion = '';
			alert ("תודה רבה, פרטי המשוב התקבלו בהצלחה, הינך מעובר לעמוד הראשי");
			window.location.href = "#/app/main";
        })
        .error(function(data, status, headers, config)
        {
			//alert("f : " +data.responseText)
            //console.log('error : ' + data);
            //console.log('error : ' + data);
        });
		
	}
})

.controller('Recommended', function($scope,$http,$rootScope) 
{
})

.controller('Contacts', function($scope,$http,$rootScope) 
{
	  $scope.contacts = $rootScope.contacts;
	  console.log("Con : " + $scope.contacts);
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})




.controller('MainController', function($scope,$http) 
{
    $http.get('js/json/pubs.json').success(function(data)
	{
		$scope.navTitle='<img class="title-image" src="img/main/ylogo.png" />'
		$scope.rightButton = '<img class="right-button" src="img/main/question.png" />'
		
		//setBackgroundImg();
		LevelOpen = 2;
		//$scope.BackUrl = checkBackUrl();
		$scope.ginun = data;
		Page_Id = 1;
		
		$scope.navigateUrl = function (Path,Num) 
		{	
			window.location.href = Path+String(Num);
		}
		
		$scope.showInfo = function () 
		{
			angular.element('#InfoPopUp').css('visibility','visible');
		}
		
		$scope.hideInfo = function () 
		{
			angular.element('#InfoPopUp').css('visibility','hidden');
		}
	});
})


.controller('CatagoryPosts', function($scope,$http,$rootScope,$stateParams) 
{
		$scope.id  = $stateParams.id;
		$rootScope.selectedBlogCategory = $scope.id; 
		
		$scope.colorArray = new Array("#377fba","#00ac36");
		$scope.imageurl = $rootScope.host;
		$scope.blogposts = $rootScope.Blogs;
		$scope.articles = $scope.blogposts[$scope.id].articles;
		$scope.catagoryimage = $scope.imageurl+"/"+$scope.blogposts[$scope.id].CatImage;
		$scope.catagoryname = $scope.blogposts[$scope.id].CatName;
		
		
	
	/*	$http.get($rootScope.host+'/getArticles.php?catid='+id)
        .success(function(data, status, headers, config)
        {
		$scope.imageurl = $rootScope.host;
		$scope.blogposts = data.response;

        })
        .error(function(data, status, headers, config)
        {

        });*/
		
		
  
})

.controller('BlogPost', function($scope,$http,$rootScope,$stateParams) 
{
		$scope.id  = $stateParams.id;
		$rootScope.selectedBlogCategory = $scope.id; 
		$scope.blogposts = $rootScope.Blogs;
		$scope.articles = $scope.blogposts[$scope.id].articles;
		
		 $http.get($rootScope.host+'/getArticles.php?id='+id)
        .success(function(data, status, headers, config)
        {
		//console.log(contacts);
		$scope.imageurl = $rootScope.host;
		$scope.articleimage = data.response.image;
		$scope.articletitle = data.response.title;
		$scope.articletext = data.response.desc;

		$scope.articlecatagory = data.response.catname;
		//console.log(data)
            //console.log(status + ' - ' + data.responseText);
        })
        .error(function(data, status, headers, config)
        {
			//alert("f : " +data.responseText)
            //console.log('error : ' + data);
        });
		
  
})


.controller('MenuController', function($scope,$http,$rootScope,$stateParams) 
{
		$scope.imageurl = $rootScope.host;
		$scope.blogposts = $rootScope.Blogs;
		
		$scope.navigateUrl = function (Path,Num) 
		{
			setTimeout(function(){ window.location.href = Path+String(Num); }, 0);	
		}
})


.controller('Youtube', function($scope,$http,$rootScope,$stateParams) 
{
	
})




.filter('cutString_ListPage', function () {
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
})




