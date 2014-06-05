angular.module("showshop").controller("AuctionController", ['$scope', function(scope){

	scope.auctions = [
						{id: '1', product_name: 'Playstation 4', time_left: new Date(0, 0, 0, 8, 57, 10, 0), counter: '10'}, 
						{id: '2', product_name: 'Xbox One', time_left: new Date(0, 0, 0, 12, 6, 0, 0), counter: '15'}, 
						{id: '3', product_name: 'Notebook Gamer CCE', time_left: new Date(0, 0, 0, 1, 5, 15, 0), counter: '154'},
						{id: '4', product_name: 'Monitor LG Ultra Wide IPS', time_left: new Date(0, 0, 0, 1, 10, 9, 0), counter: '7'}
						];

	scope.update_timer = function(){
		for(var i = 0; i < scope.auctions.length; i++){
			scope.auctions[i].time_left = scope.auctions[i].time_left - (new Date(999));
			scope.$apply();
		}
	};

	setInterval(function() {
		scope.update_timer();
	}, 1000);

}]);