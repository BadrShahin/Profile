angular.module("myApp", []).controller("myCtrl", function($scope){
	$scope.socialIcons=[
	{class:'fa fa-github', url:'https://github.com/BadrShahin'},
	{class:'fa fa-google', url:'https://plus.google.com/u/0/+BadrShahin'},
	{class:'fa fa-linkedin', url:'https://www.linkedin.com/in/badr-shahin-968997b5/'},
	{class:'fa fa-facebook-f', url:'https://www.facebook.com/BadrShahin95'},
	{class:'fa fa-twitter', url:'https://twitter.com/ShahinBadr'}
	];

	$scope.menuItems=[
	{name:'Home', url:'#'},
	{name:'Portfolio', url:'#portfolio'},
	{name:'About', url:'#about'},
	{name:'Contact', url:'#contact'}
	];
});