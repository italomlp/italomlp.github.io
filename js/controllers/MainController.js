angular.module('italom').controller('MainController', ['$anchorScroll', '$location', '$scope', 
  function($anchorScroll, $location, $scope) {

    $scope.goToAnchor = function(id) {
      if ($location.hash() !== id) {
        $location.hash(id);
      } else {
        $anchorScroll();
      }
    };
    
  }]
).run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 30;   // always scroll by 50 extra pixels
}]);