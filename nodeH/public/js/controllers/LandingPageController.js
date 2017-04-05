angular.module('RapidsApp').controller('LandingPageController', function($rootScope, $scope,$cookieStore, $window,$http, $timeout,$location) {
  $scope.$on('$viewContentLoaded', function() {
    //$scope.selected="";
  $scope.cities=["Bangalore","Delhi","Kolkata","Chennai"];
  $scope.hotels = [
    {id:"b1", name: "1. Serengeti", image: "assets/dist/img/hotel1.jpg", location: "Bangalore", price: 1000, description: "African rain forest is the theme of this restaurant located on the top-most floor of Total Mall."},
    {id:"b2", name: "2. Sahib Sindh Sultan", image: "assets/dist/img/hotel2.jpg", location: "Bangalore", price:1500, description: "The theme is a railway station straight out of India’s imperial past. "},
    {id:"b3", name: "3. Firangi Paani", image: "assets/dist/img/hotel3.jpg", location: "Bangalore", price: 2000, description: "Resembles an English pub so well ."},
    {id:"b4", name: "4. Gufha", image: "assets/dist/img/hotel4.jpg", location: "Bangalore", price: 2500, description: "Modelled like a cave with low ceilings. "},

    {id:"d1", name: "1. Band Baaja Baaraat", image: "assets/dist/img/dhotel1.jpg", location: "Delhi", price: 1000, description: "African rain forest is the theme of this restaurant located on the top-most floor of Total Mall."},
    {id:"d2", name: "2. The Firki Bar", image: "assets/dist/img/dhotel2.jpg", location: "Delhi", price:1500, description: "The theme is a railway station straight out of India’s imperial past. "},
    {id:"d3", name: "3. The Classroom", image: "assets/dist/img/dhotel3.jpg", location: "Delhi", price: 2000, description: "Resembles an English pub so well ."},
    {id:"d4", name: "4. Kooper Kadai", image: "assets/dist/img/dhotel4.jpg", location: "Delhi", price: 2500, description: "Modelled like a cave with low ceilings. "},
    {id:"d5", name: "5. Mother India", image: "assets/dist/img/dhotel5.jpg", location: "Delhi", price: 2500, description: "Modelled like a cave with low ceilings. "},

    {id:"k1", name: "1. Fly Kouzina", image: "assets/dist/img/khotel1.jpg", location: "Kolkata", price: 1000, description: "African rain forest is the theme of this restaurant located on the top-most floor of Total Mall."},
    {id:"k2", name: "2. Barbeque Nation", image: "assets/dist/img/khotel2.jpg", location: "Kolkata", price:1500, description: "The theme is a railway station straight out of India’s imperial past. "},
    {id:"k3", name: "3. Raize The Bar", image: "assets/dist/img/khotel3.jpg", location: "Kolkata", price: 2000, description: "Resembles an English pub so well ."},
    {id:"k4", name: "4. The Bikers Cafe", image: "assets/dist/img/khotel4.jpg", location: "Kolkata", price: 2500, description: "Modelled like a cave with low ceilings. "},
    {id:"k5", name: "5. Mamagoto", image: "assets/dist/img/khotel5.jpg", location: "Kolkata", price: 2500, description: "Modelled like a cave with low ceilings. "},

    {id:"c1", name: "1. Chili's", image: "assets/dist/img/chotel1.jpg", location: "Chennai", price: 2500, description: "Modelled like a cave with low ceilings. "},    
    {id:"c2", name: "2. Barbeque Nation", image: "assets/dist/img/chotel2.jpg", location: "Chennai", price:1500, description: "The theme is a railway station straight out of India’s imperial past. "},
    {id:"c3", name: "3. Punjab Grill", image: "assets/dist/img/chotel3.jpg", location: "Chennai", price: 2000, description: "Resembles an English pub so well ."},
    {id:"c4", name: "4. Khandani Rajdhani", image: "assets/dist/img/chotel4.jpg", location: "Chennai", price: 2500, description: "Modelled like a cave with low ceilings. "},
    {id:"c5", name: "5. Buhari Restaurant", image: "assets/dist/img/chotel5.jpg", location: "Chennai", price: 2500, description: "Modelled like a cave with low ceilings. "},


  ];

  $scope.dishMenu=[
   {id:"b1", dishImage1:"assets/dist/img/hotel2.jpg", dish1name:"Paneer Matar" , dish1price:"150",
    dishImage2:"assets/dist/img/hotel2.jpg", dish2name:" Fry Rice" , dish2price:"60",
    dishImage3:"assets/dist/img/hotel2.jpg", dish3name:"Mix Dry Veg" , dish3price:"80",
    dishImage4:"assets/dist/img/hotel2.jpg", dish4name:"Roasted hicken" , dish4price:"180"},

   {id:"b2",  dishImage1:"assets/dist/img/hotel2.jpg", dish1name:"Paneer Matar" , dish1price:"150",
    dishImage2:"assets/dist/img/hotel2.jpg", dish2name:" Fry Rice" , dish2price:"60",
    dishImage3:"assets/dist/img/hotel2.jpg", dish3name:"Mix Dry Veg" , dish3price:"80",
    dishImage4:"assets/dist/img/hotel2.jpg", dish4name:"Roasted hicken" , dish4price:"180"},

   {id:"b3", dishImage1:"assets/dist/img/hotel2.jpg", dish1name:"Paneer Matar" , dish1price:"150",
    dishImage2:"assets/dist/img/hotel2.jpg", dish2name:" Fry Rice" , dish2price:"60",
    dishImage3:"assets/dist/img/hotel2.jpg", dish3name:"Mix Dry Veg" , dish3price:"80",
    dishImage4:"assets/dist/img/hotel2.jpg", dish4name:"Roasted hicken" , dish4price:"180"},

   {id:"b4", dishImage1:"assets/dist/img/hotel2.jpg", dish1name:"Paneer Matar" , dish1price:"150",
    dishImage2:"assets/dist/img/hotel2.jpg", dish2name:" Fry Rice" , dish2price:"60",
    dishImage3:"assets/dist/img/hotel2.jpg", dish3name:"Mix Dry Veg" , dish3price:"80",
    dishImage4:"assets/dist/img/hotel2.jpg", dish4name:"Roasted hicken" , dish4price:"180"}
            

  ];

  $scope.selectedHotels=[];

  $scope.search=function(selectedCity){

  	$scope.selectCity= selectedCity;
  	console.log("selected city", $scope.selectCity)

    //Search all the hotels for the selected location
    $scope.selectedHotels = getHotelsByLocation($scope.selectCity);
     console.log("selectedHotels.............",$scope.selectedHotels)

  }

  function getHotelsByLocation(selectCity){
      var selectedHotels=[];
      for (i = 0; i <   $scope.hotels.length; i++){
   //console.log("city",$scope.hotels.location);
   //console.log("inside method",selectCity);
      if($scope.hotels[i].location===selectCity){
      console.log("selected hotel in selected city",$scope.hotels[i]);
   //console.log("hotel name",$scope.hotels[i].name);
      selectedHotels.push($scope.hotels[i]);


    }


 }
 return selectedHotels;
  }


  //find dish

    $scope.selectedDishList=[];

    $scope.findDish=function(hotelid){
    alert("inside findDish"); 
    
      $scope.selectedHotelId= hotelid;
      console.log("selected hotelid....", $scope.selectedHotelId);

    //Search all the hotels for the selected location
    $scope.selectedDishList = getDishListByHotelName($scope.selectedHotelId);
     console.log("selecteddishList.............",$scope.selecteddishList)
     window.location = "./views/orderProduct.html";

  }
 
  function getDishListByHotelName(selectedHotelId){
      var selectedDishList=[];
      for (i = 0; i <   $scope.hotels.length; i++){
   //console.log("city",$scope.hotels.location);
   //console.log("inside method",selectCity);
      if($scope.dishMenu[i].id===selectedHotelId){
      console.log("selected dish in selected hotel",$scope.dishMenu[i]);
   //console.log("hotel name",$scope.hotels[i].name);
      selectedDishList.push($scope.dishMenu[i]);


    }


 }
 return selectedDishList;
  }
 

 /* $scope.findDish = function(selectedHotel){
    $scope.selectHotel= selectedHotel;
    if($scope.hotels[i].id==$scope.dishMenu){
       window.location = "./views/orderProduct.html";
 }
}
*/

  });
});
