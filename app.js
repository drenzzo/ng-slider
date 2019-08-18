angular
	.module("myApp", [])
	.controller('myAppController', ['$http', ctrlPrincipal])

	function ctrlPrincipal($http){
		var vm = this;
		vm.images = []
		var pms = $http.get("https://jsonplaceholder.typicode.com/photos");
		pms.then(function(response){
			var data = response.data;
			angular.forEach(data, function(item){
				if(item.id <= 10) vm.images.push(item);
			});
		});
	}
