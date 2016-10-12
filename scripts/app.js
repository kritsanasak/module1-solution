(function(){

  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    var menuDish = '';
    $scope.textfill = function(){
      menuDish =$scope.menuDish.split(",");
      return menuDish;
    };

    $scope.checkMenu = function(){
      var menuCnt = 0;
      for (var i = 0; i < menuDish.length; i++) {
        if(menuDish[i] !== ""){
          menuCnt += 1;
        }
      }
      if(menuCnt > 3){
        $scope.message = "Too Much!";
      }
      else {
        $scope.message = "Enjoy!";
      }
    };




  }

})();
