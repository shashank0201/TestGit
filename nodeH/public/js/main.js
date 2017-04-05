
var RapidsApp = angular.module("RapidsApp", [

    "ui.router",
    "ui.bootstrap",
    "oc.lazyLoad",
    "ngSanitize",
  "ngCookies",
]);

RapidsApp.controller('AppController',function($rootScope, $scope, $http, $timeout,$location,$window) {
  $scope.$on('$viewContentLoaded', function() {

  });

});

RapidsApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/landingPage");
    $stateProvider

      // landingPage
        .state('landingPage', {
            url: "/landingPage",
            templateUrl: "views/landingPage.html",

            controller: "LandingPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'RapidsApp',
                        insertBefore: '#ng_load_plugins_before',
                        files: [
                          //'assets/dist/customcss.css',

                            'assets/bootstrap/css/bootstrap.min.css',
                            'js/controllers/LandingPageController.js',
                            'assets/dist/css/landingPage.css'
                            //'js/fb.js'

                        ]
                    });
                }]
            }
        })


          // thankyouPage
            .state('thankyouPage', {
                url: "/thankyouPage",
                templateUrl: "views/thankyouPage.html",

                controller: "ThankyouPageController",
                resolve: {
                    deps: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'RapidsApp',
                            insertBefore: '#ng_load_plugins_before',
                            files: [
                                'js/controllers/ThankyouPageController.js',
                                'assets/bootstrap/css/bootstrap.min.css',
                                  'assets/dist/css/style21.css',
                            ]
                        });
                    }]
                }
            })


            // // contact_Us
              .state('contact', {
                  url: "/contact",
                  templateUrl: "views/contact.html",

                  controller: "ContactPageController",
                  resolve: {
                      deps: ['$ocLazyLoad', function($ocLazyLoad) {
                          return $ocLazyLoad.load({
                              name: 'RapidsApp',
                              insertBefore: '#ng_load_plugins_before',
                              files: [
                                  'js/controllers/ContactPageController.js',
                                  'assets/bootstrap/css/bootstrap.min.css',
                                    'assets/dist/css/contact.css'
                              ]
                          });
                      }]
                  }
              })



              //registrations

              .state('registration', {
                  url: "/registration",
                  templateUrl: "views/registration.html",

                  controller: "RegistrationPageController",
                  resolve: {
                      deps: ['$ocLazyLoad', function($ocLazyLoad) {
                          return $ocLazyLoad.load({
                              name: 'RapidsApp',
                              insertBefore: '#ng_load_plugins_before',
                              files: [
                                  'js/controllers/RegistrationPageController.js',
                                  'assets/bootstrap/css/bootstrap.min.css',
                                    'assets/dist/css/contact.css'
                              ]
                          });
                      }]
                  }
              })


              //orderProduct

              .state('orderProduct', {
                  url: "/orderProduct",
                  templateUrl: "views/orderProduct.html",

                  controller: "OrderProductController",
                  resolve: {
                      deps: ['$ocLazyLoad', function($ocLazyLoad) {
                          return $ocLazyLoad.load({
                              name: 'RapidsApp',
                              insertBefore: '#ng_load_plugins_before',
                              files: [
                                  'js/controllers/OrderProductController.js',
                                  'assets/bootstrap/css/bootstrap.min.css',
                                    'assets/dist/css/contact.css'
                              ]
                          });
                      }]
                  }
              })



}]);
