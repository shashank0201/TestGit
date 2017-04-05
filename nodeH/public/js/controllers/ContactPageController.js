angular.module('RapidsApp').controller('ContactPageController', function($rootScope, $scope,$cookieStore, $window,$http,$timeout,$location) {
  $scope.$on('$viewContentLoaded', function() {
    $scope.feedbackDetails=[];

    $scope.feedback={};
      $scope.save=function(){
        $http({
      				  method: 'POST',
      				  url: '/contact/suggestion',
      				  data:$scope.feedback
      					}).then(function successCallback(response) {
      				   console.log("success------",response);
      				  }, function errorCallback(response) {
      				   console.log("failure------",response.data);
      			});

      }











  // $scope.store=function(){
  //
  // 	/*$scope.feedbackData={};
  // 	$scope.feedbackData.fname=$scope.feedback.fname;
  // 	$scope.feedbackData.lname=$scope.feedback.lname;
  // 	$scope.feedbackData.email=$scope.feedback.email;
  // 	$scope.feedbackData.message=$scope.feedback.message;
  //
  // 	$scope.feedbackDetails.push($scope.feedbackData);
  //
  // 	console.log($scope.feedback);
  // 	console.log($scope.feedbackDetails);
  // 	*/
  //
  //     var Videos = $resource('/api/videos');
  //     Videos.save($scope.video, function(){
  //     $location.path('/');
  //
  // });




});
});
