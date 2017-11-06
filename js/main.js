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
	$scope.education=[
	{school_name:'Mostafa Kamel Preparatory school', year: '2008 - 2011', content: 'I graduated from Preparatory school with an Excellent Degree (91%).', courses: ''},
	{school_name:'High secondary school', year: '2011 - 2013', content: 'I graduated from High secondary school with an Excellent Degree (93.2%).', courses: ''},
	{school_name:'Faculty of Computer and Information', year: '2013 - 2017', content: 'I graduated from faculty of Computer and Information Menofia University with grade good (71.63%).', courses: 'Faculty Studied Courses Operating systems, Database Design, Software Engineering Java Programming, Computer Network, Data Structure and System Analysis.'},
	];
});
