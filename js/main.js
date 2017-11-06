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
	$scope.info=[
	{info_desc:'Name', info_value: 'Badr Shahin'},
	{info_desc:'Mobile', info_value: '01143800132 - 01013824412'},
	{info_desc:'Email', info_value: 'badr.shahin2014@gmail.com'},
	{info_desc:'Date of Birth', info_value: '1995-01-15'},
	{info_desc:'Nationality', info_value: 'Egyptian'},
	{info_desc:'Gender', info_value: 'Male'},
	{info_desc:'Military Service', info_value: 'Exempted'},
	{info_desc:'Languages', info_value: 'Arabic - English'},

	];
});
