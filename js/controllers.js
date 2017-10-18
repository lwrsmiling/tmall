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
  $scope.addressForm = MyService.getAddress();
  $scope.confirmed = false;
  $scope.confirm = function(){
    MyService.confirm();
    $scope.confirmed = true;
  };
});

app.controller('ordersCtrl', function($scope, MyService){
  $scope.orders = MyService.getOrders();
});

app.controller('navCtrl', function($scope, MyService, $rootScope, $cookieStore, AuthService){
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
  }
});

app.controller('loginCtrl', function($scope, $rootScope, $location, AuthService){
  AuthService.clearCredentials();
  $scope.login = function(){
    $scope.dataLoading = true;
    AuthService.login($scope.username, $scope.password, function(response){
      if(response.success){
        AuthService.setCredentials($scope.username, $scope.password);
        console.log($location.path());
        $location.path('/');
      }
      else{
        $scope.error = response.message;
        $scope.dataLoading = false;
      }
    });
  };
});
