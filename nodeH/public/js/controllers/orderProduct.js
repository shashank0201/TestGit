angular.module('RapidsApp').controller('OrederProductController', function($rootScope, $scope,$cookieStore, $window,$http, $timeout,$location) {
  $scope.$on('$viewContentLoaded', function() {
    //(function(){

  $scope.redirect = function(){
  window.location = "./views/orderProduct.html";
}





  });
});
