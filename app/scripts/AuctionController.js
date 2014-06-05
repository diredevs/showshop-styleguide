angular.module("showshop").controller("AuctionController", ['$scope', function(scope){

	scope.auctions = [
						{  id: '1',
							 product_name: 'Playstation 4',
							 price: '3900',
							 time_left: new Date(0, 0, 0, 0, 57, 10, 0),
							 counter: '10',
							 image: '../imgs/001.jpg',
							 timing_out: false
						},
						{	id: '2',
							 product_name: 'Xbox One',
							 price: '1800',
							 time_left: new Date(0, 0, 0, 0, 8, 0, 0),
							 counter: '15',
							 image: '../imgs/002.jpg',
							 timing_out: true
						},
						{  id: '3',
							 product_name: 'Notebook Gamer CCE',
							 price: '1200',
							 time_left: new Date(0, 0, 0, 0, 38, 15, 0), counter: '154',
							 image: '../imgs/004.jpg',
							 timing_out: false
						},
						{  id: '4',
							 product_name: 'Monitor LG Ultra Wide IPS',
							 price: '1600',
							 time_left: new Date(0, 0, 0, 0, 9, 9, 0),
							 counter: '7',
							 image: '../imgs/005.jpg',
							 timing_out: true
						}
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
