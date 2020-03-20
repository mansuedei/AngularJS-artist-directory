var myControllers = angular.module("myControllers", []);

myControllers.controller("SearchController", function myController(
	$scope,
	$http
) {
	$http.get("js/data.json").then(function(response) {
		$scope.artists = response.data;
		$scope.artistOrder = "name";
	});
});
