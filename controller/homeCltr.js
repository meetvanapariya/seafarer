angular.module("myApp")
.controller('homeCtrl', function($scope) {
	$scope.img="assets/images/travell1.jpg";
	var i = 0;
	var arr = ["assets/images/travell1.jpg","assets/images/travel4.jpg","assets/images/travel3.jpg","assets/images/img2.jpg"];
	$scope.left = function(){
		if(i == 0){
			i = arr.length - 1;
			$scope.img = arr[i];
		}
		else{
			i--;
			$scope.img = arr[i];	
		}
	}
	$scope.right = function(){
		if( i == arr.length - 1)
		{
			i = 0;
			$scope.img = arr[i];
		}
		else{
			i++;
			$scope.img = arr[i];
		}

	}
	
})
.controller('x', function($scope) {
 console.log("hii");
})