// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])
.run(function($rootScope,$ionicPlatform,$http) {
	$rootScope.host  = 'http://tapper.co.il/soroka/php/';
	$rootScope.selectedBlogCategory = 0;
	
	///////Blog Load
	 $http.get($rootScope.host + 'getStories.php')
     .success(function(data, status, headers, config)
     {
			$rootScope.Blogs = data;
			console.log($rootScope.Blogs)
      })
      .error(function(data, status, headers, config)
      {
			
      });
		
	///////About Load
	 $http.get($rootScope.host + 'getAbout.php?id=1')
        .success(function(data, status, headers, config)
        {
			$rootScope.aboutimage = data.response.image;
			$rootScope.abouttitle = data.response.title;
			$rootScope.abouttext = data.response.desc;
        })
        .error(function(data, status, headers, config)
        {
			
        });
		
		
	///////Contact Load	
	 $http.get($rootScope.host+'/getContacts.php')
        .success(function(data, status, headers, config)
        {
			$rootScope.contacts = data.response;
        })
        .error(function(data, status, headers, config)
        {
			
        });
		
		
		
	
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
	
	
	
  });
})


  
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
$ionicConfigProvider.backButton.previousTitleText(false).text('');

  $stateProvider
    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })
  
  
   .state('app.main', {
    url: '/main',
    views: {
      'menuContent': {
        templateUrl: 'templates/main.html',
        controller: 'MainController'
      }
    }
  })
  
  .state('app.categories', {
    url: '/categories',
    views: {
      'menuContent': {
        templateUrl: 'templates/menu_page.html',
        controller: 'MenuController'
      }
    }
  })
  
    .state('app.catagoryposts/:id', {
    url: '/catagoryposts/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/blog_catagory_posts.html',
        controller: 'CatagoryPosts'
      }
    }
  })
  
      .state('app.blogpost/:id', {
    url: '/blogpost/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/blog_post.html',
        controller: 'BlogPost'
      }
    }
  })

        .state('app.about', {
    url: '/about',
    views: {
      'menuContent': {
        templateUrl: 'templates/about.html',
        controller: 'About'
      }
    }
  })
      .state('app.feedback', {
    url: '/feedback',
    views: {
      'menuContent': {
        templateUrl: 'templates/feedback.html',
        controller: 'Feedback'
      }
    }
  })
  
   .state('app.youtube', {
    url: '/youtube',
    views: {
      'menuContent': {
        templateUrl: 'templates/youtube.html',
        controller: 'Youtube'
      }
    }
  })
  
        .state('app.recommended', {
    url: '/recommended',
    views: {
      'menuContent': {
        templateUrl: 'templates/recommended.html',
        controller: 'Recommended'
      }
    }
  })
  
          .state('app.contacts', {
    url: '/contacts',
    views: {
      'menuContent': {
        templateUrl: 'templates/contacts.html',
        controller: 'Contacts'
      }
    }
  })
   
  
  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
});
