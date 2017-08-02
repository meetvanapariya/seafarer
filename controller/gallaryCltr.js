angular.module("myApp")
.controller('gallaryCltr', function($scope) {
	$scope.data1 = "hello";
	function timeout1(){
  	$scope.$apply(function(){
  		
  		$scope.data2 = true;
 })
  	}

	setTimeout(timeout1, 1000);
});