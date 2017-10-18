app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
    templateUrl: 'partials/home.html',
    allowAnonymous: true
  })
    .when('/login', {
    templateUrl: 'partials/login.html',
    controller: 'loginCtrl',
    allowAnonymous: true
  })
    .when('/logout', {
    templateUrl: 'partials/home.html',
    allowAnonymous: true
  })
    .when('/cart', {
    templateUrl: 'partials/cart.html',
    controller: "cartCtrl",
    allowAnonymous: true
  })
    .when('/orders', {
      templateUrl: 'partials/orders.html',
      controller: "ordersCtrl",
      allowAnonymous: false
  })
    .otherwise({redirectTo: '/'});
}]);

app.run(function($location, $rootScope, $log, $route, $cookieStore, $http){
  $rootScope.globals = $cookieStore.get('globals') || {};
  if ($rootScope.globals.currentUser) {
      $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
  }
  function onRouteChangeStart(event, next, current){
    if(!next.allowAnonymous && !$rootScope.globals.currentUser){
      $location.path('/login');
//      $log.log('Authentication required, redirect to login.');
//      var returnUrl = $location.path();
//      $log.log('return url is ' + returnUrl);
//      event.preventDefault();
//      $location.path('/login');
//      $location.path('/login').search({
//        returnUrl: returnUrl
//      });
    }
  }
  $rootScope.$on('$routeChangeStart', onRouteChangeStart);
});

//app.run(['$rootScope', '$location', '$cookieStore', '$http', '$log',
//    function ($rootScope, $location, $cookieStore, $http, $log) {
//        // keep user logged in after page refresh
//        $rootScope.globals = $cookieStore.get('globals') || {};
//        if ($rootScope.globals.currentUser) {
//            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
//        }
//  
//        $rootScope.$on('$locationChangeStart', function (event, next, current) {
//            // redirect to login page if not logged in
////            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
////                $location.path('/');
////            }
//          if(!next.allowAnonymous && !$rootScope.globals.currentUser){
//            $log.log('Authentication required, redirect to login.');
//            var returnUrl = $location.url();
//            $log.log('return url is' + returnUrl);
//            event.preventDefault();
//            $location.path('/login').search({
//              returnUrl: returnUrl
//            });
//          }
//        });
//    }]);