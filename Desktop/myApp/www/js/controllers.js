angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $ionicPopup, $state, Auth) {
    $scope.data = {};
    $scope.user={};
    $scope.count=1;
 
    $scope.login = function() {
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tab.events');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    }

    $scope.goToRegister= function(){
      console.log('in goto')
      $state.go('register');
    }

    $scope.nextSteps= function(){
      $scope.count++;
    }

    $scope.registerFinal= function(){
      $scope.count++;
      console.log('final:', $scope.user)
    }
    $scope.processRegistration= function(){
      console.log('process user', $scope.user)
      Auth.registerUser($scope.user)
    }
})

.controller('RegisterCtrl',function($scope,$state){
  $scope.user={};
})
.controller('EventsCtrl', function($scope, $state,Events) {
  $scope.events= Events.all();

  // $scope.expandEvent= function(){
  //   $state.go('tab.events.expand');
  //   console.log('event expand')
  // }
})

.controller('PhotoCtrl', function($scope, Photos) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
   $scope.getPhotos= Photos.getPhotos();


  
})

// .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
//   $scope.chat = Chats.get($stateParams.chatId);
// })

.controller('AccountCtrl', function($scope) {

  var APP_ID= '121842778204517';
  var APP_SECRET= '79fadad414d49cd043837aecb67b266b';

  $scope.settings = {
    enableFriends: true
  };
})

// .controller('EventExpandCtrl', function($scope,$stateParams,Events){
//   $scope.event= Events.get($stateParams.eventId);

// });
