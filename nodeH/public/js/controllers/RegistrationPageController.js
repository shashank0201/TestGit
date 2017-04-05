

angular.module('RapidsApp').controller('RegistrationPageController', function($rootScope, $scope,$cookieStore, $window,$http, $timeout,$location) {
  $scope.$on('$viewContentLoaded', function() {
 store=localStorage;

$scope.registration={};
$scope.signinuser={};
$scope.signup=function(){
$scope.registrationData={};
$scope.registrationData.username=$scope.registration.username;
$scope.registrationData.password=$scope.registration.password;
$scope.registrationData.email=$scope.registration.email;
$scope.registrationData.contact=$scope.registration.contact;

localStorage.setItem("store", JSON.stringify($scope.registrationData));
  console.log($scope.registration);
}

$scope.signin=function()
{
  alert("inside Signin");
$scope.user={};
// $scope.user.username=$scope.signinuser.username;
// $scope.user.password=$scope.signinuser.password;

  $scope.user=JSON.parse(localStorage.getItem("store"));
  console.log("successful",$scope.user.username);
  if(  $scope.user.username==$scope.signinuser.username &&  $scope.user.password==$scope.signinuser.password)
  {
console.log("successful",$scope.user.username);
console.log("successful",$scope.signinuser.username);
  } else{
    
  }

}



  });
});
