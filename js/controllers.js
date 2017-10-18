app.controller('cateCtrl', function($scope, MyService){
  $scope.categories = MyService.categories;
  $scope.products = MyService.products;
  $scope.loading = [false, false];
  $scope.hovering = -1;
  $scope.showProduct = function(index){
    $scope.loading[index] = true;
    $scope.hovering = index;
  }
  $scope.hideProduct = function(index){
    $scope.loading[index] = false;
    $scope.hovering = -1;
    
  }
});

app.controller('homeCateCtrl', function($scope, MyService){
  $scope.cateProducts = MyService.getCateProducts();
  $scope.addItem = function (parentIndex, childIndex){
			MyService.addItem(parentIndex, childIndex);
      alert(parentIndex, childIndex);
		};
});

app.controller('cartCtrl', function($scope, MyService){
  $scope.discount = MyService.discount;
  $scope.items = MyService.getCartItems();
  $scope.addQuantity = function(index){
    MyService.addQuantity(index);
  };
  $scope.reduceQuantity = function(index){
    MyService.reduceQuantity(index);
  };
  $scope.removeQuantity = function(index){
    MyService.removeQuantity(index);
  };
  $scope.getQuantities = function(){
    var totalNum = 0;
    $scope.items.forEach(function(item, index){
      totalNum += parseInt(item.quantity);
    });
    return totalNum;
  };
  $scope.getAmount = function(){
    var amount = 0;
    $scope.items.forEach(function(item, index){
      amount += parseInt(item.price*item.quantity);
    });
    return amount;
  };
});

app.controller('nav', function($scope, MyService, $rootScope, $cookieStore, AuthService){
  $scope.items = MyService.getCartItems();
  $scope.getQuantities = function(){
    var totalNum = 0;
    $scope.items.forEach(function(item, index){
      totalNum += parseInt(item.quantity);
    });
    return totalNum;
  };
  $scope.logout = function(){
    AuthService.clearCredentials();
    $rootScope.isLoggedIn = false;
//    $scope.isLoggedIn = false;
  }
});

//app.controller('loginCtrl', function($scope, $rootScope, AUTH_EVENTS, AuthService){
//  $scope.credentials = {
//    username: '',
//    password: ''
//  };
//  $scope.login = function(credentials){
//    AuthService.login(credentials).then(function(user){
//      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
//      $scope.setCurrentUser(user);
//    }, function(){
//      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
//    });
//  };
//  javascript:void(0);
//});
app.controller('loginCtrl', function($scope, $rootScope, $location, AuthService){
  AuthService.clearCredentials();
  $scope.login = function(){
    $scope.dataLoading = true;
    AuthService.login($scope.username, $scope.password, function(response){
      if(response.success){
//        $rootScope.isLoggedIn = true;
        AuthService.setCredentials($scope.username, $scope.password);
        console.log($location.path());
        $location.path('/');
      }
      else{
        $rootScope.isLoggedIn = false;
        $scope.error = response.message;
        $scope.dataLoading = false;
      }
    });
  };
});
