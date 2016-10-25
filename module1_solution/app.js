(function() {

  angular.module('LunchCheck',[])

  .controller('LunchCheckController',controller);
controller.$inject = ['$scope'];
function controller($scope) {


    $scope.items="";

  $scope.check_noOfiems = function (str) {
   var arr = str.split(',');
    $scope.length = arr.length;
    console.log(arr);
    if ($scope.length>2)
    $scope.message = "Too much!";
    else if ($scope.length != 1) {

          $scope.message = "Enjoy!";
        }
    else {
      $scope.message = "enter the data first";
    }
};

}


})();
