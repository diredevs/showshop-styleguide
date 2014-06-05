angular.module("showshop").controller("AuctionController", ['$scope', function(scope){

	scope.auctions = [
						{id: '1', product_name: 'playstation 4'}, 
						{id: '2', product_name: 'Xbox One'}, 
						{id: '3', product_name: 'Notebook Gamer CCE - Linux'},
						{id: '4', product_name: 'Monitor LG Ultra Wide IPS'}
						];

}]);