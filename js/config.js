app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
    templateUrl: 'partials/home.html',
    allowAnonymous: true
  })
    .when('/login', {
    template: 'login please',
    allowAnonymous: true
  })
    .when('/cart', {
    templateUrl: 'partials/cart.html',
    controller: "cartCtrl",
    allowAnonymous: false
  })
    .otherwise({redirectTo: '/'});
}]);

app.run(function($location, $rootScope, $log, $route){
  function onRouteChangeStart(event, next, current){
    if(!next.allowAnonymous && !$rootScope.currentUser){
      $log.log('Authentication required, redirect to login.');
      var returnUrl = $location.url();
      $log.log('return url is' + returnUrl);
      event.preventDefault();
      $location.path('/login').search({
        returnUrl: returnUrl
      });
    }
  }
  $rootScope.$on('$routeChangeStart', onRouteChangeStart);
});