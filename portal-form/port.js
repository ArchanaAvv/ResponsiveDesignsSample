
var app = angular.module("myApp",['ngMessages']);


// validations

app.controller('myCtrl',function($scope){
	 $scope.difine=false;
	 $scope.Show=function(){
	 	$scope.difine=true;
	 }
	 $scope.dolor1=false;
	 $scope.ballon1=function(){
	 	$scope.dolor1=true;
	 }
	 $scope.dolor2=false;
	 $scope.ballon2=function(){
	 	$scope.dolor2=true;
	 }
	  $scope.dolor3=false;
	 $scope.ballon3=function(){
	 	$scope.dolor3=true;
	 }
	  $scope.dolor4=false;
	 $scope.ballon4=function(){
	 	$scope.dolor4=true;
	 }
	  $scope.dolor5=false;
	 $scope.ballon5=function(){
	 	$scope.dolor5=true;
	 }
})