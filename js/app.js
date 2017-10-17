var app = angular.module("myApp", ['ngRoute']);
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

app.controller('nav', function($scope, MyService){
  $scope.items = MyService.getCartItems();
  $scope.getQuantities = function(){
    var totalNum = 0;
    $scope.items.forEach(function(item, index){
      totalNum += parseInt(item.quantity);
    });
    return totalNum;
  };
});